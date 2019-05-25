import React from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button, ThemeProvider, CheckBox } from 'react-native-elements';

const STORAGE_KEY = 'MYKEY'
const STORAGE_ROLE = 'MYROLE'
const STORAGE_PHONE = 'MYPHONE'


export default class UserOtpScreen extends React.Component {
    static navigationOptions = {
        title: 'Register',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#168814',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props){
        super(props)
        this.state = {
            otp: '',
        }
    }

    componentWillMount() {
        console.log('loaded')
    }

    handleOtp = text => {
        this.setState({ otp: text });
    };

    verify = () => {
        const { navigation } = this.props;
        const phone = navigation.getParam('phone', 'no-phone');
        //cheaking verify code
        let body = 'phone='+phone+'&varification_code='+this.state.otp
        fetch('http://vatdhkeast.gov.bd/user-varification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            },
            body: body, // <-- Post parameters
            })
            .then(response => response.json())
            .then(responseText => {
                console.log(responseText);
                if(responseText.response == 'yes'){
                    alert('User registered, you can login now');
                    this.props.navigation.navigate('ComplainLoginScreen');
                }
                else{
                    alert('otp does not match')
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    

    render() {
        var {height, SCREEN_WIDTH} = Dimensions.get('window');
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <LinearGradient
                    colors={['#96c93d', 'transparent']}
                    style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 300,
                    }}
                />
                <FontAwesome name="wpforms" size={60} color="white" />
                <Text style={{color: 'white', margin:10}}>VAT SMART!</Text>
                <ThemeProvider
                    theme={{
                    Input: {
                        inputContainerStyle: {
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: 'white',
                            height: 50,
                            marginVertical: 10,
                            width: 280
                        },
                        placeholderTextColor: 'white',
                            inputStyle: {
                            marginLeft: 10,
                            color: 'white',
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
                    <Text
                        style={{
                        color: 'white',
                        fontSize: 16,
                        marginVertical: 10,
                        fontWeight: '300',
                        }}
                    >
                        Enter otp
                    </Text>
                    <Input
                        leftIcon={
                        <FontAwesome
                            name="check"
                            color="white"
                            size={25}
                        />
                        }
                        placeholder="OTP"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        returnKeyType="next"
                        onChangeText={this.handleOtp}
                    />
                    <Button
                        title="Verify"
                        containerStyle={{paddingTop: 20,}}
                        buttonStyle={{
                            backgroundColor: '#8BC34A', 
                            width: 280,
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: '#8BC34A',
                        }}
                        onPress={() => {
                            this.verify();
                        }}
                    />
                    </View>
                </ThemeProvider>
                
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#168814',
        alignItems: 'center',
        justifyContent: 'center',
    },
});