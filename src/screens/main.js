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
        <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={BANNERS.WIDTH}>
          {BANNERS.TOP.map((image, index) => this.renderPage(image, index))}
        </Carousel>

        <WhiteSpace />

        <WebView
          source={{
            uri: BANNERS.URL,
          }}
          onNavigationStateChange={this.onNavigationStateChange}
          startInLoadingState
          scalesPageToFit
          javaScriptEnabled
          style={{ flex: 1 }}
        />

        <WhiteSpace />

        <Carousel
          autoplay
          autoplayTimeout={BANNERS.TIMEOUT}
          loop
          index={0}
          pageSize={BANNERS.WIDTH}>
          {BANNERS.BOTTOM.map((image, index) => this.renderPage(image, index))}
        </Carousel>
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