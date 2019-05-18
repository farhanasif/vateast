import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { Input, Button } from "react-native-elements";

export default class CheckBinScreen extends React.Component {
  static navigationOptions = {
    title: "Check BIN",
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: "#168814",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      load: false,
      isFocused: false,
      bin: "",
      reply: ""
    };
  }

  componentWillMount() {
    console.log("loaded");
  }

  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleBIN = text => {
    this.setState({ bin: text });
  };

  checkBIN = () => {
    let len = this.state.bin.length;
    if (len < 9) {
      this.setState({ reply: "BIN must be minimum 9 digit" });
    } else {
      this.setState({ reply: "BIN ok" });
      if (len > 9 && len < 12) {
        this.setState({ reply: "this is an OLD BIN" });
        //lets check if the BIN starts with 21
        let res = this.state.bin.substring(0, 2);
        if (res == 21) {
          // this.setState({reply: 'this is an OLD BIN with 21'}) //////// here we check
          // network request ///////////
          let uri =
            "http://nbr.gov.bd/get-in-old-bin/eng/NBRDFDNozrulhoq/aa3c43b6f20f9cee8007a990d58" +
            "2b648/" +
            this.state.bin +
            "/?un=NBRDFDNozrulhoq&pass=aa3c43b6f20f9cee8007a990d582b648&id=" +
            this.state.bin;
          fetch(uri)
            .then(response => response.json())
            .then(responseJson => {
              if (responseJson.old_info_info.length < 1) {
                this.setState({ reply: "no data found with the BIN" });
              } else {
                let reply = "Name: " + responseJson.old_info_info.Name;
                //console.log(reply);
                //this.setState({ reply });
                this.props.navigation.navigate('CheckBinDetailScreen', {
                    BIN: 'old',
                    otherParam: responseJson,
                });
              }

              console.log(JSON.stringify(responseJson));
            })
            .catch(error => {
              console.error(error);
            });
        } else {
          this.setState({ reply: "this is an OLD BIN without 21" });
        }
      } else if (len == 9) {
        let uri =
          "http://nbr.gov.bd/get-in-new-bin/eng/NBRDFDNozrulhoq/aa3c43b6f20f9cee8007a990d58" +
          "2b648/" +
          this.state.bin +
          "/?un=NBRDFDNozrulhoq&pass=aa3c43b6f20f9cee8007a990d582b648&id=" +
          this.state.bin;
        fetch(uri)
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.new_info_info.length < 1) {
              this.setState({ reply: "no data found with the BIN" });
            } else {
              let reply = "Name: " + responseJson.new_info_info.NAME;
              //console.log(reply);
              //this.setState({ reply });
              this.props.navigation.navigate('CheckBinDetailScreen', {
                BIN: 'new',
                otherParam: responseJson,
              });
            }

            console.log(JSON.stringify(responseJson));
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        this.setState({ reply: "INVALIED BIN" });
      }
    }
  };

  render() {
    var { height, width } = Dimensions.get("window");
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <LinearGradient
          colors={["#96c93d", "transparent"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 300
          }}
        />
        <Ionicons name="md-checkmark-circle" size={60} color="red" />
        <Text
          style={{
            color: "white",
            margin: 10
          }}
        >
          BIN CHECKER!
        </Text>
        <Input
          containerStyle={{
            backgroundColor: "#96c93d",
            width: 280
          }}
          placeholder="ENTER YOUR BIN HERE"
          leftIcon={
            <FontAwesome
              name="wpforms"
              size={18}
              color="white"
              style={{ paddingRight: 10 }}
            />
          }
          keyboardType="number-pad"
          onChangeText={this.handleBIN}
        />
        <Button
          title="Submit"
          containerStyle={{
            paddingTop: 20
          }}
          buttonStyle={{
            backgroundColor: "#8BC34A",
            width: 140
          }}
          onPress={() => {
            this.checkBIN();
          }}
        />
        <Text style={{color: 'white'}}>{this.state.reply}</Text>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#168814",
        alignItems: "center",
        justifyContent: "center"
    }
});
