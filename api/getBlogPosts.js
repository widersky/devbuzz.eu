import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function getPostsDirectory(lang) {
		return join(process.cwd(), `/_posts/${lang}`);
}

export function getPostSlugs(lang) {
		return fs.readdirSync(getPostsDirectory(lang));
}

export function getPostBySlug(slug, fields = [], lang) {
		const realSlug = slug.replace(/\.mdx$/, "");
		const fullPath = join(getPostsDirectory(lang), `${realSlug}.mdx`);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);
		const items = {};

		fields.forEach((field) => {
				if (field === "slug") { items[field] = realSlug; }
				if (field === "content") { items[field] = content; }
				if (field === "niceDate") { items[field] = dayjs(data.date).format("DD.MM.YYYY"); }
				if (data[field]) { items[field] = data[field]; }
		});

		return items;
}

export function getBlogPosts(fields = [], lang) {
		const slugs = getPostSlugs(lang);
		const posts = slugs
				.map((slug) => getPostBySlug(slug, fields, lang))
				.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
		return posts;
}