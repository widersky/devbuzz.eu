import '../styles/globals.css';

import Head from 'next/head';
import { AnimatePresence } from "framer-motion";

import SiteHeader from '../components/globals/SiteHeader';
import SiteFooter from '../components/globals/SiteFooter';

const DevBuzzEU = ({ Component, pageProps, router }) => {
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg" href="/favicon.svg" />
            </Head>

            <SiteHeader />

            <div className='flex-grow relative mt-32'>
                <AnimatePresence
                    exitBeforeEnter
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </div>
            
            <SiteFooter />
        </>
    )
}

export default DevBuzzEU;
