import { useState } from "react";
import { NextSeo } from "next-seo";
import { v4 as uuidv4 } from "uuid";

import Link from "next/link";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );

const BlogHome = ({ posts }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const postList = posts[currentPage - 1];

    return (
        <>
            <NextSeo
                title="Blog · DevBuzz"
                description="Blog dotyczący webdevu oraz spraw dookoła niego."
            />

            <main className="container mx-auto grid grid-cols-2 gap-8">
                {postList.map(({ slug, data }) => (
                    <div className="flex flex-col gap-3 text-brandTextLight text-sm" key={uuidv4()}>
                        <time dateTime={data.date}>{data.date}</time>
                        <Link href={`/blog/${slug}`}>
                            <a className="text-2xl font-bold text-brandText hover:text-brandRed">{data.title}</a>
                        </Link>
                    </div>
                ))}
            </main>
        </>
    );
};

export const getServerSideProps = async ({ locale }) => {
	const { getBlogPosts } = await import("../../api/getBlogPosts");
	const posts = await getBlogPosts(locale);
	
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			posts: chunk(posts, 10),
		},
	};
};

export default BlogHome;
