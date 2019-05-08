import React from 'react';
import Carousel from 'react-native-banner-carousel';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text,
  WebView,
} from 'react-native';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile-rn'
import { BANNERS,THEME } from '../config';
import * as shape from 'd3-shape'
import { AreaChart, Grid } from 'react-native-svg-charts'

const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

export default class App extends React.Component {
  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{ width: BANNERS.WIDTH-20, height: BANNERS.HEIGHT }}
          source={{ uri: image }}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container} >
       

        <WhiteSpace />

        <AreaChart
                style={{ height: 200 }}
                data={ data }
                contentInset={{ top: 30, bottom: 30 }}
                curve={ shape.curveNatural }
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid/>
            </AreaChart>

        <WhiteSpace />

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUNDCOLOR,
    padding:10
  },
});