import React from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button } from 'react-native-elements';


export default class CheckBinScreen extends React.Component {
    static navigationOptions = {
        title: 'Check BIN',
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
        var {height, width} = Dimensions.get('window');
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
                <Ionicons name="md-checkmark-circle" size={60} color="red" />
                <Text style={{color: 'white', margin:10}}>BIN CHECKER!</Text>
                <Input
                    containerStyle={{backgroundColor: '#96c93d', width: 280}}
                    placeholder='ENTER YOUR BIN HERE'
                    leftIcon={
                        <FontAwesome name="wpforms" size={18} color="white" style={{paddingRight: 10,}}/>
                    }
                    keyboardType="number-pad"

                />
                <Button
                    title="Submit"
                    containerStyle={{paddingTop: 20,}}
                    buttonStyle={{backgroundColor: '#8BC34A', width: 140}}
                />
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