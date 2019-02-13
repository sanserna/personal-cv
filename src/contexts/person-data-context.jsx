import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

let PersonContext;

const { Provider, Consumer } = (PersonContext = React.createContext({
  personData: {},
  setPersonData: () => {}
}));

class PersonDataProvider extends React.Component {
  setPersonData = personData => {
    this.setState({ personData });
  };

  state = {
    personData: {},
    setPersonData: this.setPersonData
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

function withPersonData(Component) {
  const Wrapper = React.forwardRef((props, ref) => {
    return (
      <Consumer>
        {personProvider => (
          <Component {...props} personProvider={personProvider} ref={ref} />
        )}
      </Consumer>
    );
  });

  Wrapper.displayName = `withPersonData(${Component.displayName ||
    Component.name})`;

  hoistNonReactStatics(Wrapper, Component);

  return Wrapper;
}

export {
  withPersonData,
  PersonDataProvider,
  PersonContext,
  Consumer as PersonDataConsumer
};
