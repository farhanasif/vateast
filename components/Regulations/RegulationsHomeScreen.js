import React from 'react';
import { StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';

import { ListItem } from 'react-native-elements';
//import console = require('console');

const list2 = [
    {
        name: 'Finance Acts',
        linearGradientColors: ['#93291E', '#ED213A'],
        screen: 'FinanceActScreen',
        url:'',
    },
    {
        name: 'Vat Act, 1991',
        linearGradientColors: ['#3F51B5', '#2196F3'],
        screen: 'VatAct1991Screen',
        url:'',
    },
    {
        name: 'VAT & SD Act, 2012 (Bangla)',
        linearGradientColors: ['#FFD600', '#FF9800'],
        screen: 'VatSDAct2012BanScreen',
        url:'',
    },
    {
        name: 'VAT & SD Act, 2012 (English)',
        linearGradientColors: ['#000000', '#0f9b0f'],
        screen: 'VatAct2012EngScreen',
        url:'https://google.com',
    },
    {
        name: 'VAT Rules, 1991',
        linearGradientColors: ['#f12711', '#f5af19'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/regulations/rules/vat-rules/eng',
    },
    {
        name: 'General Orders',
        linearGradientColors: ['#4CAF50', '#8BC34A'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/regulations/gos/vat-gos/eng',
    },
    {
        name: 'Special Orders',
        linearGradientColors: ['#F44336', '#E91E63'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/regulations/gos/vat-gos/eng',
    },
];


export default class RegulationsHomeSCreen extends React.Component {
    static navigationOptions = {
        title: 'Regulations',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#168814',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    

    render() {
        var {height, width} = Dimensions.get('window');

        return (
            <ScrollView>
                <View style={{alignItems: 'flex-end'}}>
                    <Image
                        style={{width: 100, height: 100}}
                        source={require('../../assets/icon.png')}
                    />
                </View>
                <View style={{ backgroundColor: '#fff', paddingVertical: 8 }}>
                    {list2.map((l, i) => (
                        <ListItem
                        component={TouchableScale}
                        friction={90}
                        tension={100}
                        activeScale={0.95}
                        //leftAvatar={{ rounded: true, source: { uri: l.avatar_url } }}
                        leftIcon={{ name: 'book', color: 'white' }}
                        key={i}
                        linearGradientProps={{
                            colors: l.linearGradientColors,
                            start: {x: 0.0, y: 0.0},
                            end: {x: 0.0, y: 0.8},
                        }}
                        ViewComponent={LinearGradient}
                        title={l.name}
                        titleStyle={{ color: 'white', fontWeight: 'bold' }}
                        chevronColor="white"
                        chevron
                        containerStyle={{
                            marginHorizontal: 16,
                            marginVertical: 8,
                            borderRadius: 8,
                        }}
                        onPress={() => {
                            console.log(l.screen);
                            this.props.navigation.navigate(l.screen,{
                                title: l.name,
                                url: l.url,
                            });
                        }}
                        />
                    ))}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#168814',
    },
});
