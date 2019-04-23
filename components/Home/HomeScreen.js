import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    

    render() {
        var {height, width} = Dimensions.get('window');

        return (
        <View style={styles.container}>
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
            <Text style={{color: 'white', margin:10}}>Welcome to VAT-EAST!</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Regulations')}>
                    <View style={{alignItems: 'center', width: width/3 }}>
                        <FontAwesome name="book" size={40} color="white" />
                        <Text style={{color: 'white', marginTop: 10}}>Regulations</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CheckBinScreen')}>
                    <View style={{alignItems: 'center', width: width/3 }}>
                        <FontAwesome name="search" size={40} color="white" />
                        <Text style={{color: 'white', marginTop: 10}}>Check BIN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ResourcesHomeScreen')}>
                    <View style={{alignItems: 'center', width: width/3 }}>
                        <FontAwesome name="files-o" size={40} color="white" />
                        <Text style={{color: 'white', marginTop: 10}}>Resources</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ReportsHomeSCreen')}>
                    <View style={{alignItems: 'center', width: width/3 }}>
                        <FontAwesome name="file-text" size={40} color="white" />
                        <Text style={{color: 'white', marginTop: 10}}>Reports</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ComplainLoginScreen')}>
                    <View style={{alignItems: 'center', width: width/3 }}>
                        <FontAwesome name="ticket" size={40} color="white" />
                        <Text style={{color: 'white', marginTop: 10}}>Complain</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Act2012Screen')}>
                <View style={{alignItems: 'center', width: width/3 }}>
                    <FontAwesome name="calculator" size={40} color="white" />
                    <Text style={{color: 'white', marginTop: 10}}>Calculator</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('FormsHomeScreen')}>
                    <View style={{alignItems: 'center', width: width/3 }}>
                        <FontAwesome name="wpforms" size={40} color="white" />
                        <Text style={{color: 'white', marginTop: 10}}>Forms</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SupportHomeSCreen')}>
                    <View style={{alignItems: 'center', width: width/3 }}>
                        <FontAwesome name="handshake-o" size={40} color="white" />
                        <Text style={{color: 'white', marginTop: 10}}>Support</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OnlineHomeSCreen')}>
                    <View style={{alignItems: 'center', width: width/3 }}>
                        <FontAwesome name="sellsy" size={40} color="white" />
                        <Text style={{color: 'white', marginTop: 10}}>Online Service</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ComplainLoginScreen')}>
                    <View style={{alignItems: 'center', width: width/3 }}>
                        <FontAwesome name="user-o" size={40} color="white" />
                        <Text style={{color: 'white', marginTop: 10}}>Profile</Text>
                    </View>
                </TouchableOpacity>
                <View style={{alignItems: 'center', width: width/3 }}>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('LearningHomeScreen')}>
                    <View style={{alignItems: 'center', width: width/3 }}>
                        <MaterialIcons name="video-label" size={40} color="white" />
                        <Text style={{color: 'white', marginTop: 10}}>VAT eLearning</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
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
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
});
