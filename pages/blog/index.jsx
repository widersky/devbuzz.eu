import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Blog · DevBuzz</title>
                <meta
                    name="description"
                    content="Blog dotyczący webdevu oraz spraw dookoła niego."
                />
            </Head>

            <main></main>
        </>
    );
};

// TODO: https://www.joshwcomeau.com/blog/how-i-built-my-blog/

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join("blog"));
    const posts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join("blog", filename),
            "utf-8"
        );
        const { data: frontMatter } = matter(markdownWithMeta);
        return {
            frontMatter,
            slug: filename.split(".")[0],
        };
    });
    return {
        props: {
            posts,
        },
    };
};

export default Home;
