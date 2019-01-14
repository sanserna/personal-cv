import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const { Provider, Consumer } = React.createContext();

class PersonDataProvider extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            personJson(id: { eq: "sanserna" }) {
              name
              profesion
              email
              phone
              birthdate
              softSkills
              techSkills {
                label
                level
              }
              social {
                facebook
                instagram
                linkedin
                github
              }
            }
          }
        `}
        render={({ personJson }) => (
          <Provider value={{ ...personJson }}>{this.props.children}</Provider>
        )}
      />
    );
  }
}

export { PersonDataProvider, Consumer as PersonDataConsumer };
