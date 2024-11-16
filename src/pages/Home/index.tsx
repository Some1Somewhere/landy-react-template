import { lazy } from "react";
import Content from "../../content.json";
import { ButtonTProps } from "../../components/ContentBlock/types";
import YouTubeEmbed from "../../components/YouTubeEmbed";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={Content.IntroContent.title}
        content={Content.IntroContent.text}
        button={Content.IntroContent.button  as ButtonTProps[]}
        icon={Content.IntroContent.image}
        id="intro"
      />
      <MiddleBlock
        title={Content.MiddleBlockContent.title}
        content={Content.MiddleBlockContent.text}
        button={Content.MiddleBlockContent.button}
      />
      <ContentBlock
        direction="right"
        title={Content.AboutContent.title}
        content={Content.AboutContent.text}
        section={Content.AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <YouTubeEmbed videoId="URIKKpJwhqY" />
      <ContentBlock
        direction="left"
        title={Content.MissionContent.title}
        content={Content.MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      {/* <ContentBlock
        direction="right"
        title={Content.ProductContent.title}
        content={Content.ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
      <Contact
        title={Content.ContactContent.title}
        content={Content.ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
