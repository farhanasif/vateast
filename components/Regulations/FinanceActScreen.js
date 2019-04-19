import React from 'react';
import { StyleSheet, Image, View, Dimensions, ScrollView, WebView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';




export default class FinanceActScreen extends React.Component {
    static navigationOptions = {
        title: 'Finance Acts',
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
            <View style={{flex: 1, alignItems: 'center'}}>
                <WebView
                    source={{uri: 'http://nbr.gov.bd/regulations/acts/finance-acts/eng'}}
                    onLoadEnd={() => console.log('loading finished')}
                    style={{flex:1, width: (width - 20)}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#168814',
    },
});
