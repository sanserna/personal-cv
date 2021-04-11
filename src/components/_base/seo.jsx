import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from 'app-content/meta/config';

const Seo = ({ description, meta, keywords, title }) => (
  <Helmet
    htmlAttributes={{
      lang: config.siteLanguage,
    }}
    title={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: config.author.name,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: description,
      },
    ]
      .concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      )
      .concat(meta)}
  />
);

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

Seo.defaultProps = {
  title: config.siteTitle,
  description: config.siteDescription,
  meta: [],
  keywords: [],
};

export default Seo;
