import Head from 'next/head';

import HomeHero from '../components/sections/HomeHero';
import HomeSection1 from '../components/sections/HomeSection1';
import HomeSection2 from '../components/sections/HomeSection2';
import HomeSection3 from '../components/sections/HomeSection3';
import HomeSection4 from '../components/sections/HomeSection4';

const Home = () => {
  return (
    <>
      <Head>
        <title>DevBuzz | Adrian Widerski - Fullstack web developer</title>
        <meta name="description" content="Blog dotyczący webdevu oraz spraw dookoła niego." />
      </Head>

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

export default Home;