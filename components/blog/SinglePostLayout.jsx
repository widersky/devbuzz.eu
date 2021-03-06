import Image from "next/image";
import { NextSeo } from "next-seo";
import { v4 as uuidv4 } from "uuid";

// Animations
import { motion } from "framer-motion";
import {
	blogSinglePostImageAnim,
	blogSinglePostContentAnim
} from "../../helpers/animations";

const Layout = ({ children, title, description, thumbnail, tags, date }) => {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />

            {thumbnail && (
                <motion.div
									className="w-full h-80 md:h-[480px] relative mb-6"
									initial={blogSinglePostImageAnim.initial}
									animate={blogSinglePostImageAnim.animate}
									exit={blogSinglePostImageAnim.exit}
									transition={{ duration: .5 }}
								>
                    <Image
                        src={thumbnail}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="bg-brandRed bg-opacity-30 absolute top-0 left-0 right-0 bottom-0" />
                </motion.div>
            )}

            <div className="container mx-auto -mt-40 relative z-10">
                <motion.div
									className="lg:w-2/3 mx-auto pt-9 px-4 md:px-16 bg-brandLight bg-opacity-75 backdrop-blur-lg rounded-lg border-t border-white border-opacity-50"
									initial={blogSinglePostContentAnim.initial}
									animate={blogSinglePostContentAnim.animate}
									exit={blogSinglePostContentAnim.exit}
									transition={{ duration: .5 }}
								>

                    {/* Tags & date */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex gap-2">
                            {tags &&
                                tags.map((tag) => (
                                    <span
                                        className="rounded py-1 px-2 bg-brandTextLight text-white text-sm"
                                        key={uuidv4()}
                                    >
                                        <i className="not-italic opacity-50">#</i>
                                        {tag}
                                    </span>
                                ))}
                        </div>

                        <span className="text-brandTextLight">{date}</span>
                    </div>
                    
                    {/* Post content */}
                    {children}

                </motion.div>
            </div>
        </>
    );
};

export default Layout;
