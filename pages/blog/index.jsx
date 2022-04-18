import { useState } from "react";
import { NextSeo } from "next-seo";
import { v4 as uuidv4 } from "uuid";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Components
import SinglePostCard from "components/SinglePostCard";

// Constants
import { BLOG_POST_FIELDS } from "../../lib/constants";

// Animations
import { motion } from "framer-motion";
import { blogCardAnim } from "../../helpers/animations";

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

			<main className="container mx-auto px-4 lg:px-0">
				{/* Heading */}
				<motion.div
					initial={blogCardAnim.initial}
					animate={blogCardAnim.animate}
					exit={blogCardAnim.exit}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-4xl font-bold text-brandText">Blog</h1>
				</motion.div>

				{/* Latest posts */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
					{postList
						.map((data, i) => (
							<motion.div
								initial={blogCardAnim.initial}
								animate={blogCardAnim.animate}
								exit={blogCardAnim.exit}
								transition={{ delay: i * 0.1, duration: 0.5 }}
								className="flex flex-col gap-3 text-brandTextLight text-sm"
								key={uuidv4()}
							>
								<SinglePostCard data={data} />
							</motion.div>
						))}
				</div>
			</main>
		</>
	);
};

export const getStaticProps = async ({ locale }) => {
	const { getBlogPosts } = await import("../../api/getBlogPosts");
	const posts = getBlogPosts(BLOG_POST_FIELDS, locale);

	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			posts: chunk(posts, 10),
		},
	};
};

export default BlogHome;
