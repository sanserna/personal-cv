/* eslint-disable react/no-danger */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import { FaCalendarAlt, FaTags } from 'react-icons/fa';

// import Seo from 'app-lib/seo';
// import Badge from 'app-lib/badge';

const PostTemplate = () => <div />;

// const PostTemplate = props => {
//   const {
//     size: {
//       radius: { small: imgBorderRadius }
//     },
//     color: {
//       scheme: { medium: headerBorderColor, dark: darkColor },
//       neutral: {
//         white,
//         gray: { b: headerBgColor }
//       }
//     }
//   } = useContext(ThemeContext);
//   const {
//     data: {
//       post: {
//         html,
//         fields: { prefix },
//         frontmatter: {
//           author,
//           title,
//           description,
//           categories = [],
//           cover: {
//             childImageSharp: { fluid }
//           }
//         }
//       }
//     }
//   } = props;

//   return (
//     <>
//       <header className="post-header">
//         <Container fluid style={{ maxWidth: 1300 }}>
//           <Row align="center" nogutter>
//             <Col xs={12} sm={5}>
//               <Img fluid={fluid} className="post-header__img" />
//             </Col>

//             <Col xs={12} sm={7}>
//               <div className="header-text-wrapper">
//                 <h1 className="post-header__title">{title}</h1>

//                 <p className="post-header__txt-item">
//                   <span className="font-weight-bold">Autor - </span>
//                   {author}
//                 </p>

//                 <p className="post-header__txt-item">
//                   <span className="font-weight-bold">
//                     <FaCalendarAlt />
//                   </span>
//                   {` ${prefix}`}
//                 </p>

//                 <div className="categories">
//                   <span className="font-weight-bold icon">
//                     <FaTags />
//                   </span>
//                   {categories.map((category, index) => (
//                     /* eslint-disable react/no-array-index-key */
//                     <Badge key={index} text={category} />
//                     /* eslint-enable react/no-array-index-key */
//                   ))}
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </header>

//       <main className="post-content">
//         <Container>
//           <Row>
//             <Col>
//               <div dangerouslySetInnerHTML={{ __html: html }} />
//             </Col>
//           </Row>
//         </Container>
//       </main>

//       <Seo title={title} description={description} />

//       <style jsx>{`
//         .post-header {
//           padding-top: 1rem;
//           padding-bottom: 1rem;

//           .post-header__title,
//           .post-header__txt-item {
//             margin: 0;
//           }

//           .post-header__title {
//             padding-top: 10px;
//           }

//           .post-header__txt-item {
//             text-transform: capitalize;

//             .font-weight-bold {
//               font-weight: bold;
//             }

//             &:first-of-type {
//               padding-top: 10px;
//             }

//             &:not(:last-of-type) {
//               padding-bottom: 5px;
//             }
//           }
//         }

//         .categories {
//           display: flex;
//           align-items: center;

//           .icon {
//             margin-right: 5px;
//           }
//         }

//         .post-content {
//           padding-top: 2rem;
//           padding-bottom: 1rem;
//         }

//         @above mobile {
//           .post-header {
//             padding-top: 1.3rem;
//             padding-bottom: 1.3rem;

//             .post-header__title {
//               padding-top: 0;
//             }
//           }

//           .header-text-wrapper {
//             padding-top: 0;
//             padding-left: 20px;
//           }
//         }
//       `}</style>

//       <style jsx>{`
//         .post-header {
//           border-bottom: 1px solid ${headerBorderColor};
//           background-color: ${headerBgColor};

//           :global(.post-header__img) {
//             border-radius: ${imgBorderRadius};
//           }

//           .post-header__title,
//           .post-header__txt-item {
//             color: ${darkColor};
//           }
//         }

//         .post-content {
//           background-color: ${white};
//         }
//       `}</style>
//     </>
//   );
// };

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        prefix
      }
      frontmatter {
        author
        title
        description
        categories
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
