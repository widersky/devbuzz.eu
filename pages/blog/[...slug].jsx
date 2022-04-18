import fs from 'fs';
import path from 'path';

import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SinglePostLayout = dynamic(() =>
	import("../../components/blog/SinglePostLayout")
);

// Single post components
import Paragraph from "../../components/blog/Paragraph";
import Heading1 from "../../components/blog/Heading1";
import Heading2 from "../../components/blog/Heading2";
import Ul from "../../components/blog/Ul";

const components = {
	p: Paragraph,
	h1: Heading1,
	h2: Heading2,
	ul: Ul,
};

const SinglePost = ({ source, frontMatter }) => {
	const router = useRouter();

	if (!router || !source) return <>Oops</>;

	return (
		<>
			<SinglePostLayout
				title={frontMatter.title}
				description={frontMatter.description}
				thumbnail={frontMatter.thumbnailUrl}
				tags={frontMatter.tags}
				date={frontMatter.date}
			>
				<MDXRemote {...source} components={components} lazy />
			</SinglePostLayout>
		</>
	);
};

export const getStaticPaths = async () => {
	const files = fs.readdirSync(path.join("_posts"));
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".mdx", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params, locale }) => {
	const { getPostBySlug } = await import("../../api/getBlogPosts");
	const { content, data } = await getPostBySlug(params.slug);

	console.log(params);

	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});

	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			source: mdxSource,
			frontMatter: data,
		},
	};
};

export default SinglePost;
