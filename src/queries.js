import { graphql } from 'gatsby';

export const getBlogPosts = graphql`
  query GetBlogPosts(
    $limit: Int
    $filter: MarkdownRemarkFilterInput
    $sort: MarkdownRemarkSortInput
  ) {
    allMarkdownRemark(limit: $limit, filter: $filter, sort: $sort) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            categories
            author
            cover {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  layout: CONSTRAINED
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
      }
    }
  }
`;
