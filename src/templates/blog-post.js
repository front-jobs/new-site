import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import RecommendedPosts from "../components/RecommendedPosts"
// import Comments from "../components/Comments"

import * as S from '../components/Post/styled'
import HeaderPosts from '../components/HeaderPosts'

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <HeaderPosts />
      <S.PostHeader>
        <S.PostDate>{post.frontmatter.date}</S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostCompany>
          <S.PostLabel>Empresa:</S.PostLabel> {post.frontmatter.company}
        </S.PostCompany>
        <S.PostPlace>
          <S.PostLabel>Local:</S.PostLabel> {post.frontmatter.place}
          </S.PostPlace>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      {/* <Comments url={post.fields.slug} title={post.frontmatter.title} /> */}
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        company
        place
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
