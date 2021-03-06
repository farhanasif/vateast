import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const list = [
    {
        name: 'VAT 1991 Forms',
        linearGradientColors: ['#4CAF50', '#8BC34A'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/form/vat/vat-1991/eng',
    },
    {
        name: 'VAT 2012 Forms',
        linearGradientColors: ['#3F51B5', '#2196F3'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/form/vat/vat-2012/eng',
    },
    {
        name: 'Income Tax',
        linearGradientColors: ['#FFD600', '#FF9800'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/form/income-tax/eng',
    },
    {
        name: 'Other Forms',
        linearGradientColors: ['#000000', '#0f9b0f'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/form/other-relevant-forms/eng',
    },
];

export default class FormsHomeScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Forms',
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
        <Text style={styles.headerText}>Forms</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'flex-end'}}>
          <Image
              style={{width: 100, height: 100}}
              source={require('../../assets/icon.png')}
          />
        </View>
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
          //ListHeaderComponent={this.renderHeader}
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
    backgroundColor: '#fff',
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
