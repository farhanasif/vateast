import React from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button, ThemeProvider } from 'react-native-elements';

const STORAGE_KEY = 'MYKEY'
const STORAGE_ROLE = 'MYROLE'
const STORAGE_PHONE = 'MYPHONE'


export default class ComplainLoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
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
            password: '',
            phone: '',
        }
    }

    componentWillMount() {
        console.log('loaded')
    }

    handlePhone = text => {
        this.setState({ phone: text });
    };

    handlePass = text => {
        this.setState({ password: text });
    };

    login = async() => {
        //cheaking verify code
        console.log('here');
        if(this.state.phone.length > 0 && this.state.password.length > 0){
            let body = 'phone='+this.state.phone+'&pass='+this.state.password;

            fetch('http://vatdhkeast.gov.bd/user-login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
                },
                body: body, // <-- Post parameters
            })
            .then(response => response.json())
            .then(responseText => {
                console.log(responseText.response);
                if(responseText.response == 'no'){
                    alert('Phone or password does not match')
                }else{
                    AsyncStorage.setItem(STORAGE_KEY, 'true')
                    AsyncStorage.setItem(STORAGE_ROLE, '1234')
                    AsyncStorage.setItem(STORAGE_PHONE, this.state.phone)
                    this.props.navigation.navigate('CheckBinScreen')
                }
            })
            .catch(error => {
                console.error(error);
            });
        }
        
    };

    forgetpass = () => {
        // this.props.navigation.navigate('UserOtpScreen', {
        //     phone: '01717423040'
        // })
    }
    

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
                        Sign in
                    </Text>
                    <Input
                        leftIcon={
                        <FontAwesome
                            name="phone"
                            color="white"
                            size={25}
                        />
                        }
                        placeholder="Phone"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        returnKeyType="next"
                        onChangeText={this.handlePhone}
                    />
                    <Input
                        leftIcon={
                        <FontAwesome
                            name="lock"
                            color="white"
                            size={25}
                        />
                        }
                        placeholder="Password"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        autoCorrect={false}
                        keyboardType="default"
                        returnKeyType="next"
                        onChangeText={this.handlePass}
                    />
                    <Button
                        title="Login"
                        containerStyle={{paddingTop: 20,}}
                        buttonStyle={{
                            backgroundColor: '#8BC34A', 
                            width: 280,
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: '#8BC34A',
                        }}
                        onPress={() => {
                            this.login();
                        }}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Button
                            title="Register"
                            containerStyle={{paddingTop: 20,}}
                            buttonStyle={{
                                backgroundColor: '#8BC34A', 
                                width: 130,
                                borderRadius: 40,
                                borderWidth: 1,
                                borderColor: '#8BC34A',
                            }}
                            onPress={() => {
                                this.props.navigation.navigate('UserSignupScreen');
                            }}
                        />
                        <Button
                            title="Forgot password?"
                            containerStyle={{paddingTop: 20,}}
                            buttonStyle={{
                                backgroundColor: 'transparent', 
                                width: 180,
                            }}
                            onPress={() => {
                                this.forgetpass();
                            }}
                        />
                    
                    </View>
                    
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