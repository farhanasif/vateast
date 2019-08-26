import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const list = [
    {
        name: 'Finance Acts',
        linearGradientColors: ['#93291E', '#ED213A'],
        screen: 'FinanceActScreen',
        url:'',
    },
    {
        name: 'Vat Act, 1991',
        linearGradientColors: ['#3F51B5', '#2196F3'],
        screen: 'VatAct1991Screen',
        url:'',
    },
    {
        name: 'VAT & SD Act, 2012 (Bangla)',
        linearGradientColors: ['#FFD600', '#FF9800'],
        screen: 'VatSDAct2012BanScreen',
        url:'',
    },
    {
        name: 'VAT & SD Act, 2012 (English)',
        linearGradientColors: ['#000000', '#0f9b0f'],
        screen: 'VatAct2012EngScreen',
        url:'https://google.com',
    },
    {
        name: 'VAT Rules, 1991',
        linearGradientColors: ['#f12711', '#f5af19'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/regulations/rules/vat-rules/eng',
    },
    {
        name: 'General Orders',
        linearGradientColors: ['#4CAF50', '#8BC34A'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/regulations/gos/vat-gos/eng',
    },
    {
        name: 'Special Orders',
        linearGradientColors: ['#F44336', '#E91E63'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/regulations/gos/vat-gos/eng',
    },
];

export default class RegulationHomeScreen2 extends React.Component {
  static navigationOptions = {
    title: 'VAT EAST',
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      location: null,
      errorMessage: null,
      formatted_address: 'waiting....off for now',
    };
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
          //marginLeft: '14%',
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Regulations</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {
                //console.log(l.screen);
                this.props.navigation.navigate(item.screen,{
                    title: item.name,
                    url: item.url,
                });
            }}>
            <View style={styles.listview}>
              <View style={styles.leftlist}>
                <Icon name="filter-none" size={24} color="green" />
                <Text style={styles.item}>{item.name}</Text>
              </View>
              <Icon name="chevron-right" size={24} color="green" />
            </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    //alignItems: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  listview: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 12,
  },
  item: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: '300'
  },
  leftlist: {
    flexDirection: 'row',
  },
  header: {
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10
  },
  headerText:{
    fontSize: 18,
    fontWeight: '700'
  }
});
