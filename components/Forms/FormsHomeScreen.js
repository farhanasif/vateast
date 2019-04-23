import React from 'react';
import { StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';

import { ListItem } from 'react-native-elements';
//import console = require('console');

const list2 = [
    {
        name: 'VAT 1991 Forms',
        linearGradientColors: ['#4CAF50', '#8BC34A'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/form/vat/vat-1991/eng',
    },
    {
        name: 'VAT 2012 Forms',
        linearGradientColors: ['#3F51B5', '#2196F3'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/form/vat/vat-2012/eng',
    },
    {
        name: 'Income Tax',
        linearGradientColors: ['#FFD600', '#FF9800'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/form/income-tax/eng',
    },
    {
        name: 'Other Forms',
        linearGradientColors: ['#000000', '#0f9b0f'],
        screen: 'WeblinkScreen',
        url:'http://nbr.gov.bd/form/other-relevant-forms/eng',
    },
];


export default class FormsHomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Forms',
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
