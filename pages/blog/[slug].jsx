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

import { BLOG_POST_FIELDS } from "../../lib/constants";

// Posts API
import {
	getPostBySlug,
	getBlogPosts	
} from "../../api/getBlogPosts";

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

export default SinglePost;

export const getStaticProps = async ({ params, locale }) => {
	const post = getPostBySlug(
		params.slug,
		BLOG_POST_FIELDS,
		locale
	);

	const mdxSource = await serialize(post.content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: post,
	});

	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			source: mdxSource,
			frontMatter: post,
		},
	};
};

export const getStaticPaths = async () => {
	const plPosts = getBlogPosts(["slug"], "pl");
	const enPosts = getBlogPosts(["slug"], "en");
	
	const plPaths = plPosts.map((post) => ({
		params: { slug: post.slug },
		locale: 'pl'
	}));
	
	const enPaths = enPosts.map((post) => ({
		params: { slug: post.slug },
		locale: 'en'
	}));
	
	return {
		paths: enPaths.concat(plPaths),
		fallback: false,
	};
};
