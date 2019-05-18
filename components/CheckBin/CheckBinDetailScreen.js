import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Modal,
  Image,
  ScrollView,
} from 'react-native';

import Moment from 'moment';


export default class CheckBinDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail',
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  state = {
    isFocused: false,
    bin: '',
    reply: '',
    modalVisible: false,
  };

  render() {
    const { isFocused } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;
    const { navigation } = this.props;
    const BIN = navigation.getParam('BIN', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', {});
    const register_Date =
      BIN === 'new'
        ? Moment(otherParam.new_info_info.Create_Date).format('LLL')
        : Moment(otherParam.old_info_info.Createdate).format('LLL');

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.companylogo}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../../assets/icon.png')}
            />
          </View>
          <View style={styles.header}>
            <Text style={styles.headerStyle}>
              BIN :{' '}
              {BIN === 'new'
                ? otherParam.new_info_info.BIN
                : otherParam.old_info_info.BinNumber}
            </Text>
            <Text style={styles.headerStyle}>
              {BIN === 'new'
                ? otherParam.new_info_info.NAME
                : otherParam.old_info_info.Name}
            </Text>
          </View>
          <View style={styles.addressStyle1}>
            <View style={{ width: 140 }}>
              <Text style={{ fontSize: 18 }}> Address </Text>
            </View>
            <View style={{ width: 20 }}>
              <Text style={{ fontSize: 18 }}> : </Text>
            </View>
            <View style={{ width: 180 }}>
              <Text style={{ fontSize: 14, color: '#787878' }}>
                {''}
                {BIN === 'new'
                  ? otherParam.new_info_info.ADDRESS
                  : otherParam.old_info_info.Address1}
              </Text>
            </View>
          </View>
          <View style={styles.addressStyle2}>
            <View style={{ width: 140 }}>
              <Text style={{ fontSize: 18 }}> Commissionrate </Text>
            </View>
            <View style={{ width: 20 }}>
              <Text style={{ fontSize: 18 }}> : </Text>
            </View>
            <View
              style={{
                width: 180,
                paddingTop: 1,
              }}>
              <Text style={{ fontSize: 16, color: '#787878' }}>
                {BIN === 'new'
                  ? otherParam.new_info_info.COMM_CODE
                  : otherParam.old_info_info.TypeName}
              </Text>
            </View>
          </View>
          <View style={styles.addressStyle2}>
            <View style={{ width: 140 }}>
              <Text style={{ fontSize: 18 }}> Register Date </Text>
            </View>
            <View style={{ width: 20 }}>
              <Text style={{ fontSize: 18 }}> : </Text>
            </View>
            <View
              style={{
                width: 180,
                paddingTop: 1,
              }}>
              <Text style={{ fontSize: 16, color: '#787878' }}>
                {register_Date}
              </Text>
            </View>
          </View>
          <View style={styles.addressStyle2}>
            <View style={{ width: 140 }}>
              <Text style={{ fontSize: 18 }}> Tax Type </Text>
            </View>
            <View style={{ width: 20 }}>
              <Text style={{ fontSize: 18 }}> : </Text>
            </View>
            <View
              style={{
                width: 180,
                paddingTop: 1,
              }}>
              <Text style={{ fontSize: 16, color: '#787878' }}>
                {BIN === 'new'
                  ? otherParam.new_info_info.TAX_TYPE
                  : 'Registered for VAT'}
              </Text>
            </View>
          </View>
          <View style={styles.addressStyle2}>
            <View style={{ width: 140 }}>
              <Text style={{ fontSize: 16 }}> VAT Trust Code </Text>
            </View>
            <View style={{ width: 20 }}>
              <Text style={{ fontSize: 14 }}> : </Text>
            </View>
            <View
              style={{
                width: 180,
                paddingTop: 1,
              }}>
              <Text style={{ fontSize: 16, color: '#787878' }}>
                {BIN === 'new'
                  ? otherParam.new_info_info.VAT_TRUST_CODE
                  : 'Green'}
              </Text>
            </View>
          </View>
          <View style={styles.addressStyle2}>
            <View style={{ width: 140 }}>
              <Text style={{ fontSize: 18 }}> BIN Status </Text>
            </View>
            <View style={{ width: 20 }}>
              <Text style={{ fontSize: 14 }}> : </Text>
            </View>
            <View
              style={{
                width: 180,
                paddingTop: 1,
              }}>
              <Text style={{ fontSize: 14, color: '#787878' }}>
                {BIN === 'new'
                  ? otherParam.new_info_info.STATUS === '1'
                    ? 'Active'
                    : 'Inactive'
                  : 'Active'}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              margin: 5,
            }}>
            <Text style={{ fontSize: 16, paddingTop: 10, color: '#787878' }}>
              Do You want to complain ?
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingBottom: 10,
              paddingTop: 5,
              margin: 5,
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.buttonText}>NO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
    padding: 3,
  },
  companylogo: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    //marginBottom: 170,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  logo: {
    height: 60,
    width: 300,
    marginBottom: 5,
  },
  header: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerStyle: {
    fontSize: 18,
    color: '#3c3c3c',
    //paddingBottom: 5,
  },
  addressStyle1: {
    //height: 40,
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2,
    marginBottom: 2,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingTop: 0,
    paddingBottom: 3,
  },
  addressStyle2: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2,
    marginBottom: 2,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingTop: 5,
    paddingBottom: 0,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#8fd306',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
    marginRight: 5,
  },
  button1: {
    width: 150,
    height: 50,
    backgroundColor: '#8fd306',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: 13,
  },
});
