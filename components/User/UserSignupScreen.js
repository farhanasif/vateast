import React from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button, ThemeProvider, CheckBox } from 'react-native-elements';

const STORAGE_KEY = 'MYKEY'
const STORAGE_ROLE = 'MYROLE'
const STORAGE_PHONE = 'MYPHONE'


export default class UserSignupScreen extends React.Component {
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
            name: '',
            password: '',
            retypepass: '',
            phone: '',
            gender: 'male',
            malechecked: true,
            femalechecked: false,
        }
    }

    componentWillMount() {
        console.log('loaded')
    }

    handleName = text => {
        this.setState({ name: text });
    };

    handlePhone = text => {
        this.setState({ phone: text });
    };

    handlePass = text => {
        this.setState({ password: text });
    };

    handleRetypePass = text => {
        this.setState({ retypepass: text });
    };

    register = () => {
        if (this.state.name.length < 1 || this.state.password.length < 6 || this.state.phone.length < 11) {
            alert('No name given or password must be minimum 6 digit or phone must be 11 digit.' );
        } else {
        //we shall check a request here
        if(this.state.password == this.state.retypepass){
            let gender = 'male';
            if(this.state.malechecked){
                gender = 'male'
            }else{
                gender = 'female'
            }
            let body = 'user_name='+this.state.name+'&gender='+gender+'&phone='+this.state.phone+'&cpass='+this.state.password
            fetch('http://vatdhkeast.gov.bd/user-singup', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
                },
                body: body, // <-- Post parameters
            })
                .then(response => response.json())
                .then(responseText => {
                    
                    if(responseText.response == 'yes'){
                        //we shall go to validation screen here
                        this.props.navigation.navigate('UserOtpScreen', {
                            phone: this.state.phone
                        })

                    }else{
                        console.log(responseText);
                        alert('Already registerd or error!')
                    }
                })
                .catch(error => {
                console.error(error);
                });
        }
        else{
            alert('passwords does not match')
        }

        }
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
                        Sign up
                    </Text>
                    <Input
                        leftIcon={
                        <FontAwesome
                            name="check"
                            color="white"
                            size={25}
                        />
                        }
                        placeholder="Name"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        returnKeyType="next"
                        onChangeText={this.handleName}
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
                    <Input
                        leftIcon={
                        <FontAwesome
                            name="lock"
                            color="white"
                            size={25}
                        />
                        }
                        placeholder="Retype Password"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        autoCorrect={false}
                        keyboardType="default"
                        returnKeyType="next"
                        onChangeText={this.handleRetypePass}
                    />
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
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <CheckBox
                            center
                            title='Male'
                            checked={this.state.malechecked}
                            containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                            checkedColor='white'
                            textStyle={{color: 'white'}}
                            onPress={() => {
                                this.setState({malechecked: !this.state.malechecked})
                                this.setState({femalechecked: !this.state.femalechecked})
                            }}
                        />
                        <CheckBox
                            center
                            title='Female'
                            checked={this.state.femalechecked}
                            containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                            checkedColor='white'
                            textStyle={{color: 'white'}}
                            onPress={() => {
                                this.setState({malechecked: !this.state.malechecked})
                                this.setState({femalechecked: !this.state.femalechecked})
                            }}
                        />
                    </View>
                    <Button
                        title="Register"
                        containerStyle={{paddingTop: 20,}}
                        buttonStyle={{
                            backgroundColor: '#8BC34A', 
                            width: 280,
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: '#8BC34A',
                        }}
                        onPress={() => {
                            this.register();
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