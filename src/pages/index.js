import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/normalize.css"
import "../styles/main.css"

const Main = styled.main`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SectionH2 = styled.h2`
  width: 300px;
  font-size: 18px;
  margin-left: -30px;
  padding-left: 150px;
  font-weight: 300;
  text-align: left;
  line-height: 30px;

  @media screen and (max-width: 445px) {
    width: 200px;
  }
`

const SectionAddress = styled.address`
  font-family: Tinos, sans-serif;
  font-size: 14px;
  font-style: italic;
  margin-left: -30px;
  padding-left: 150px;
  line-height: 30px;
`

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO
          title="Home"
          keywords={[
            `v3 digital studio`,
            `agency`,
            `web development`,
            `web design`,
          ]}
        />
        <Main>
          <section>
            <div style={{ maxWidth: `120px`, marginBottom: `1.45rem` }}>
              <Image />
            </div>
            <hr />
            <SectionH2>{data.site.siteMetadata.description}</SectionH2>
            <SectionAddress>
              <a href="mailto:info@v3digital.studio">info@v3digital.studio</a>
              <br />
              925.660.5981
            </SectionAddress>
          </section>
        </Main>
      </>
    )}
  />
)

export default IndexPage
