import Accomplishments from "../components/Accomplishments/Accomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";

const Home = () => {
  return (
    <Layout photo>
      <Head>
        <meta property="og:image" content={photo?.url} />
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
    </Layout>
  );
};

export default Home;
