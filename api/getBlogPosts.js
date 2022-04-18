import fs from "fs";
import { globby } from "globby";
import matter from "gray-matter";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const getBlogPosts = async (locale) => {
	const posts = await globby([locale ? `_posts/${locale}` : "_posts"]);

	return posts
		.reduce((prev, next) => {
			const fileContents = fs.readFileSync(next, "utf8");
			const { data, content } = matter(fileContents);
			const singlePostData = {
				data: {
					...data,
					date: dayjs(data.date).format("DD.MM.YYYY"),
					fromNow: dayjs(data.date).fromNow(),
				},
				slug: next.replace(/^_posts\//, "").replace(/\.mdx$/, ""),
				content,
			};

			prev.push(singlePostData);

			return prev;
		}, [])
		.sort((a, b) => dayjs(b.data.date) - dayjs(a.data.date))
		.filter((post) => post.data.draft !== true);
};

const getPostBySlug = async (slug) => {
	const finalSlug = `${slug.join("/")}`;
	const allPosts = await getBlogPosts();

	return allPosts.find((post) => post.slug.includes(finalSlug));
};

export { getBlogPosts, getPostBySlug };
