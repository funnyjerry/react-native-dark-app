import React from 'react';
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
import * as shape from 'd3-shape'
import { AreaChart, Grid } from 'react-native-svg-charts'
import MaterialTabs from 'react-native-material-tabs';
import colors from '../utils/colors';

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }

  setTab = selectedTab => {
    this.setState({ selectedTab });
  };

  render() {
    return (
      <View style={styles.container} >

        <AreaChart
          style={{ height: 200 }}
          data={data}
          contentInset={{ top: 30, bottom: 30 }}
          curve={shape.curveNatural}
          svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        >
          <Grid />
        </AreaChart>

        <MaterialTabs
          items={["other:sort_by", "other:name", "other:hours", "other:wages"]}
          selectedIndex={this.state.selectedTab}
          onChange={this.setTab}
          barColor={colors.WHITE}
          indicatorColor={colors.GREEN}
          activeTextColor={colors.DARK}
          inactiveTextColor={colors.GREY2}
          textStyle={{ fontSize: 12 }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
});