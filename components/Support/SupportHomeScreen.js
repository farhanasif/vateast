import React from 'react';
import { StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

import { ListItem } from 'react-native-elements';
//import console = require('console');

const list2 = [
    {
        name: 'VAT Online Contact Center (16555)',
        linearGradientColors: ['#93291E', '#ED213A'],
        screen: 'FinanceActScreen',
        url:'',
    },
    {
        name: 'Email Support(support@vat.gov.bd)',
        linearGradientColors: ['#3F51B5', '#2196F3'],
        screen: 'VatAct1991Screen',
        url:'',
    },
    {
        name: 'VAT Online Service Center',
        linearGradientColors: ['#FFD600', '#FF9800'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/information-library/vat-online-service-center/eng',
    },
    {
        name: 'VAT Commissionerates',
        linearGradientColors: ['#000000', '#0f9b0f'],
        screen: 'WeblinkScreen',
        url:'http://vatdhkeast.gov.bd/',
    },
    {
        name: 'VAT Academy',
        linearGradientColors: ['#f12711', '#f5af19'],
        screen: 'WeblinkScreen',
        url:'http://cevta.gov.bd/',
    },
    {
        name: 'VAT Directories',
        linearGradientColors: ['#4CAF50', '#8BC34A'],
        screen: 'WeblinkScreen',
        url:'http://cevta.gov.bd/',
    }
];


export default class SupportHomeSCreen extends React.Component {
    static navigationOptions = {
        title: 'Support',
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
                            start: [1, 0],
                            end: [0.2, 0],
                        }}
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

                            if(l.name === 'VAT Online Contact Center (16555)'){

                            }
                            else if(l.name === 'Email Support(support@vat.gov.bd)'){

                            }
                            else{
                                console.log(l.screen);
                                this.props.navigation.navigate(l.screen,{
                                    title: l.name,
                                    url: l.url,
                                });
                            }
                            
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
