import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

const Component = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

Component.defaultProps = {
  text: 'Hello.',
};

Component.propTypes = {
  text: PropTypes.string,
};

export default Component;
