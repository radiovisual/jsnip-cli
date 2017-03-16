import React, { Component, Proptypes } from 'react';
import { View, Text } from 'react-native';

class ClassName extends Component {
  componentWillMount() {
    // get to work.
  }

  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

ClassName.defaultProps = {
  text: 'Hello.',
};

ClassName.propTypes = {
  text: Proptypes.string,
};

export default ClassName;
