import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";
import styled from "styled-components";
import GIF_1 from "../../static/images/Gif-1.gif";
import GIF_2 from "../../static/images/Gif-2.gif";
import GIF_3 from "../../static/images/Gif-3.gif";
import GIF_LINE from "../../static/images/Gif-line.gif";
import GIF_REGISTER from "../../static/images/Gif-register.gif";
import { Link } from "gatsby";
import { MEDIA } from "../utils/stylesPageLayout";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background-color: black;
  padding: 40px 0;
`;

const ImageWrapper = styled.div`
  margin: 0 40px 40px;

  ${MEDIA.DESKTOP`
    width: 728px;
  `}
`;

const LineWrapper = styled.div`
  margin: 0 40px 40px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const MainWrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  width: 100%;
  z-index: 1;
  opacity: 0;
`;

class RootIndex extends React.Component {
  render() {
    const siteTitle = "ปุ๋ยบาคา ไร่ร่านาคำ";
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const [author] = get(this, "props.data.allContentfulPerson.edges");
    const metaDescription = "ปุ๋ยบาคา ปุ๋ยดีของไทย ไว้ใจได้ทุกไร่ร่า";
    const keywords = ["ปุ๋ยบาคา"];
    const LINK_URL = "https://cs1baccarat.com/";
    const LINE_URL = "line://ti/p/@CSBETWAY";

    return (
      <div>
        <Wrapper>
          <ImageWrapper>
            <Link to={LINK_URL}>
              <Image src={GIF_1} />
            </Link>
          </ImageWrapper>
          <ImageWrapper>
            <Link to={LINK_URL}>
              <Image src={GIF_2} />
            </Link>
          </ImageWrapper>
          <ImageWrapper>
            <Link to={LINK_URL}>
              <Image src={GIF_3} />
            </Link>
          </ImageWrapper>
          <ImageWrapper>
            <Link to={LINK_URL}>
              <Image src={GIF_REGISTER} />
            </Link>
          </ImageWrapper>
          <LineWrapper>
            <a href={LINE_URL}>
              <Image src={GIF_LINE} />
            </a>
          </LineWrapper>
        </Wrapper>
        <MainWrapper>
          <Layout location={this.props.location}>
            <div style={{ background: "#fff" }}>
              <Helmet
                title={siteTitle}
                meta={[
                  {
                    name: `description`,
                    content: metaDescription,
                  },
                  {
                    name: `keywords`,
                    content: (keywords || []).join(","),
                  },
                  {
                    property: `og:title`,
                    content: siteTitle,
                  },
                  {
                    property: `og:description`,
                    content: metaDescription,
                  },
                  {
                    property: `og:type`,
                    content: `website`,
                  },
                  {
                    property: `og:url`,
                    content: `https://cspui.gatsbyjs.io/`,
                  },
                ]}
              />

              <Hero data={author.node} />
              <div className="wrapper">
                <h2 className="section-headline">สินค้าทั้งหมด</h2>
                <ul className="article-list">
                  {posts.map(({ node }) => {
                    return (
                      <li key={node.slug}>
                        <ArticlePreview article={node} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Layout>
          <Background />
        </MainWrapper>
      </div>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
