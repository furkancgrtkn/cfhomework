import Head from "next/head";
import { ImageWrapper, Slogan, SectionContainer } from "styles/HomePageStyled";
import Layout from "components/Layout/Layout";
import Image from "next/image";
import chess from "public/images/render001.png";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <SectionContainer>
          <ImageWrapper>
            <Image alt="Chess" src={chess} placeholder="blur" layout="fill" />
          </ImageWrapper>
          <div className="d-flex-center col">
            <Slogan>
              Control your spending and <br />
              Make the right moves
            </Slogan>
          </div>
        </SectionContainer>
      </div>
    </Layout>
  );
}
