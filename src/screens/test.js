import React from 'react'

import {
  AppRegistry,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
} from 'react-native'

const {height} = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa'
  }
}

export default class Test extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container} >
        <Text> This is demo</Text>
      </View>
    )
  }
}