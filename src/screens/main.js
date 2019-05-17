import React from 'react';
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
import * as shape from 'd3-shape'
import { Grid, LineChart, XAxis, YAxis, AreaChart } from 'react-native-svg-charts'
import MaterialTabs from 'react-native-material-tabs';
import colors from '../utils/colors';
import config from '../utils/config';

import { LinearGradient } from 'expo';

const data = [ -4,-3,-2,-1,2,4,6,8,9,12,14,15,18,20, 25,43,35,36,38,60,65,67,68,55,54,52,49,60,64,70,80,90,91,102,104, 90,88,84,82,91,92,93,94,95,96,99,110,112,115,120,113,112,111,88,89,100,102,102,75, ]

const axesSvg = { fontSize: 10, fill: 'grey' };
const verticalContentInset = { top: 10, bottom: 10 }
const xAxisHeight = 30

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

        <LinearGradient
          style={[styles.mainContent, {
            width: config.width,
          }]}
          colors={[colors.DARKBLUE, colors.DARKBLUE2]}
        >
          <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
             
                <View style={{ flex: 1, marginLeft: 10 }}>

                <AreaChart
                    style={{ height: 200 }}
                    data={ data }
                    svg={{ fill: colors.SKY }}
            
                >
                    <Grid/>
                </AreaChart>

                </View>
            </View>
            <View style={{ height: 300}}/>
          <MaterialTabs
            items={["OVERVIEW", "RESEARCH", "TOP 10s", "CHARGES"]}
            selectedIndex={this.state.selectedTab}
            onChange={this.setTab}
            barColor={colors.WHITE}
            indicatorColor={colors.SKY}
            activeTextColor={colors.DARK}
            inactiveTextColor={colors.DARK}
            textStyle={{ fontSize: 12 }}
          />


        </LinearGradient>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});