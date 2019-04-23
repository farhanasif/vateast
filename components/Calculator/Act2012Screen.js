import React from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button, ThemeProvider } from 'react-native-elements';


export default class Act2012Screen extends React.Component {
    static navigationOptions = {
        title: 'Act 2012',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#168814',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props){
        super(props);
        this.state = {
            amount: 0,
            vatamount: 0,
            value: 0,
            flag:false,
        }
    }

    componentWillMount() {
        console.log('loaded')
    }

    _renderResult = () => {
        if (this.state.flag) {
            return (
                <View style={{paddingVertical: 15,}}>
                    <Text style={{fontWeight:'bold', color:'green', paddingHorizontal: 10, paddingBottom: 5, fontSize: 18}}>Result</Text>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={{fontWeight:'bold', color:'black', paddingHorizontal: 10, fontSize: 15}}>VAT amount:</Text>
                        <Text style={{fontWeight:'bold', color:'black', paddingHorizontal: 10, fontSize: 18}}>{this.state.vatamount}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={{fontWeight:'bold', color:'black', paddingHorizontal: 10, fontSize: 15}}>Value:</Text>
                        <Text style={{fontWeight:'bold', color:'black', paddingHorizontal: 10, fontSize: 18}}>{this.state.value}</Text>
                    </View>
                </View>
            );
        } else {
            return null;
        }
    }
    

    render() {
        var {height, SCREEN_WIDTH} = Dimensions.get('window');
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={{alignItems: 'flex-end'}}>
                    <Image
                        style={{width: 100, height: 100}}
                        source={require('../../assets/icon.png')}
                    />
                </View>
                <Text style={{color: '#ADB5B1', margin:10}}>Act 2012</Text>
                <ThemeProvider
                    theme={{
                    Input: {
                        inputContainerStyle: {
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: '#ADB5B1',
                            height: 50,
                            marginVertical: 10,
                            width: 280
                        },
                        placeholderTextColor: '#ADB5B1',
                            inputStyle: {
                            marginLeft: 10,
                            color: '#ADB5B1',
                        },
                        keyboardAppearance: 'light',
                        blurOnSubmit: false,
                    },
                    }}
                >
                    <View
                    style={{
                        width: SCREEN_WIDTH,
                        alignItems: 'center',
                        paddingBottom: 30,
                    }}
                    >
                    
                    <Input
                        leftIcon={
                        <FontAwesome
                            name="wpforms"
                            color="#ADB5B1"
                            size={25}
                        />
                        }
                        placeholder="Enter amount"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        onChangeText={(amount) => this.setState({amount})}
                    />
                    <Button
                        title="Calculate"
                        containerStyle={{paddingTop: 20,}}
                        buttonStyle={{
                            backgroundColor: '#8BC34A', 
                            width: 280,
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: '#8BC34A',
                        }}
                        onPress={() => {

                            if(this.state.amount > 0){
                                let vatamount = parseFloat(this.state.amount*.15).toFixed(2);
                                let value = parseFloat(this.state.amount - vatamount).toFixed(2);
                                this.setState({vatamount});
                                this.setState({value});
                            }
                            this.setState({
                                flag: true
                            });


                        }}
                    />
                    </View>
                </ThemeProvider>
                {this._renderResult()}
                <View>
                    <Text>VAT Rate</Text>
                    <Text style={{fontWeight:'bold', color:'red'}}>15 %</Text>
                    <Text>All prices are inclusive VAT</Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
});