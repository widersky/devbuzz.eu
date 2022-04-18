import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";

import HomeHero from '../components/sections/HomeHero';
import HomeSection1 from '../components/sections/HomeSection1';
import HomeSection2 from '../components/sections/HomeSection2';
import HomeSection3 from '../components/sections/HomeSection3';
import HomeSection4 from '../components/sections/HomeSection4';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Home = () => {
	const {t} = useTranslation("seo");
	
  return (
    <>
			<NextSeo
				title="DevBuzz | Adrian Widerski - Fullstack web developer"
				description={t('indexDesc')}
			/>

      <main>
        <HomeHero />
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
	props: {
		...await serverSideTranslations(locale, ["common", "seo"]),
	},
});

export default Home;