import React from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button, ThemeProvider, CheckBox } from 'react-native-elements';

const STORAGE_KEY = 'MYKEY'
const STORAGE_PHONE = 'MYPHONE'


export default class UserProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'User Profile',
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
            phone: '',
            gender: 'male',
            malechecked: true,
            femalechecked: false
        }
    }

    componentWillMount() {
        this.load()
    }
    
    load = async () => {
        try {
            const name = await AsyncStorage.getItem(STORAGE_KEY)
            const phone = await AsyncStorage.getItem(STORAGE_PHONE)
        
            if (name !== null) {
                this.setState({name})
                this.setState({phone})
            }
        } catch (e) {
            this.props.navigation.navigate('Home')
            //console.error('Failed to load name. '+ e)
        }
    }

    handleName = text => {
        this.setState({ name: text });
    };

    handlePhone = text => {
        this.setState({ phone: text });
    };

    _signout = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, 'false')
            await AsyncStorage.setItem(STORAGE_PHONE, null)
            
            this.props.navigation.navigate('Home')

        } catch (e) {
            this.setState({loading: false});
            console.error('Failed to remove name.' + e)
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
                        fontSize: 20,
                        marginVertical: 10,
                        fontWeight: '700',
                        }}
                    >
                        User Profile
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
                        value={this.state.phone}
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
                        title="Update"
                        containerStyle={{paddingTop: 20,}}
                        buttonStyle={{
                            backgroundColor: '#8BC34A', 
                            width: 180,
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: '#8BC34A',
                        }}
                        onPress={() => {
                            this.update();
                        }}
                    />
                    <Button
                        title="Logout"
                        containerStyle={{paddingTop: 20,}}
                        buttonStyle={{
                            backgroundColor: '#8BC34A', 
                            width: 180,
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: '#8BC34A',
                        }}
                        onPress={() => {
                            this._signout();
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