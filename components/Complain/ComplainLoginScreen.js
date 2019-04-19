import React from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button, ThemeProvider } from 'react-native-elements';


export default class ComplainLoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Complain',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#168814',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    componentWillMount() {
        console.log('loaded')
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
                            name="wpforms"
                            color="white"
                            size={25}
                        />
                        }
                        placeholder="Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        ref={input => (this.email2Input = input)}
                        onSubmitEditing={() => {
                        this.password2Input.focus();
                        }}
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
                        ref={input => (this.password2Input = input)}
                        onSubmitEditing={() => {
                        this.confirmPassword2Input.focus();
                        }}
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