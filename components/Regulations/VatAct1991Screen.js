import React from 'react';
import { StyleSheet, Image, View, Dimensions, ScrollView, WebView } from 'react-native';
import Pdf from 'react-native-pdf';



export default class VatAct1991Screen extends React.Component {
    static navigationOptions = {
        title: 'Vat Act 1991',
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
        const source = {uri:"http://nbr.gov.bd/uploads/acts/5.pdf",cache:true};
        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});
