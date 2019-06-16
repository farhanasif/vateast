import React from 'react';
import { StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Button, ThemeProvider, CheckBox } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native-gesture-handler';

const vat_rate =[
    {
      "id": 2,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S010.20-Building Construction Firm(1601 sq. ft. & above) (@ 4.5%)",
      "rate": 4.5
    },
    {
      "id": 3,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S010.20-Building Construction Firm(1101-1600 sq. ft.) (@ 2.5%)",
      "rate": 2.5
    },
    {
      "id": 4,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S010.20-Building Construction Firm(1-1100 sq. ft.) (@ 1.5%)",
      "rate": 1.5
    },
    {
      "id": 5,
      "year": "2016-2017",
      "option": "truncated",
      "title": "Sponsorship Service(@7.5%)",
      "rate": 7.5
    },
    {
      "id": 6,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S060.00-Purchaser of Auctioned Goods(@4%)",
      "rate": 4
    },
    {
      "id": 7,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S048.00-Transport Contractor Non-Petroleum(@10%)",
      "rate": 10
    },
    {
      "id": 8,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S048.00-Transport Contractor - Petroleum(@4.5%)",
      "rate": 4.5
    },
    {
      "id": 9,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S037.00-Procurement Provider(@5%)",
      "rate": 5
    },
    {
      "id": 10,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S024.00-Furniture (Trading-having VAT Challan)(@4%)",
      "rate": 4
    },
    {
      "id": 11,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S024.00-Furniture (Manufacturing)(@6%)",
      "rate": 6
    },
    {
      "id": 12,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S010.10Land Development Firm(@3%)",
      "rate": 3
    },
    {
      "id": 13,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S004.00-Construction Firm(@6%)",
      "rate": 6
    },
    {
      "id": 14,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S003.20-Dockyard(@10%)",
      "rate": 10
    },
    {
      "id": 15,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S003.10-Motor Car Garage and Workshop(@10%)",
      "rate": 10
    },
    {
      "id": 16,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S099.10-IT Enabled Services - ITES(@4.5%)",
      "rate": 4.5
    },
    {
      "id": 17,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S024.00-Furniture (Trading-without manufacturing VAT Challan)(@10%)",
      "rate": 10
    },
    {
      "id": 18,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S001.20-Non-ac Restaurant (@7.5%)",
      "rate": 7.5
    },
    {
      "id": 19,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S026.00-Goldsmith & Silversmith (@5%)",
      "rate": 5
    },
    {
      "id": 20,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S069.00-English medium school (@7.5%)",
      "rate": 7.5
    },
    {
      "id": 21,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S078.00-Branded Garments (@4%)",
      "rate": 4
    },
    {
      "id": 22,
      "year": "2016-2017",
      "option": "truncated",
      "title": "S057.00-Electricity Distribution(@5%)",
      "rate": 5
    },
    {
      "id": 23,
      "year": "2015-2016",
      "option": "truncated",
      "title": "IT Enabled Services - ITES(@4.5%)",
      "rate": 4.5
    },
    {
      "id": 24,
      "year": "2015-2016",
      "option": "truncated",
      "title": "Motor Car Garage and Workshop(@7.5%)",
      "rate": 7.5
    },
    {
      "id": 25,
      "year": "2015-2016",
      "option": "truncated",
      "title": "Dockyard(@7.5%)",
      "rate": 7.5
    },
    {
      "id": 26,
      "year": "2015-2016",
      "option": "0",
      "title": "Construction Firm(@5.5%)",
      "rate": 5.5
    },
    {
      "id": 27,
      "year": "2015-2016",
      "option": "truncated",
      "title": "Land Development Firm(@3%)",
      "rate": 3
    },
    {
      "id": 28,
      "year": "2016-2017",
      "option": "truncated",
      "title": "Furniture (Manufacturing)(@6%)",
      "rate": 6
    },
    {
      "id": 29,
      "year": "2015-2016",
      "option": "truncated",
      "title": "Furniture (Trading-having VAT Challan)(@4%)",
      "rate": 4
    },
    {
      "id": 30,
      "year": "2015-2016",
      "option": "truncated",
      "title": "Procurement Provider(@4%)",
      "rate": 4
    },
    {
      "id": 31,
      "year": "2015-2016",
      "option": "truncated",
      "title": "Transport Contractor - Petroleum(@2.25%)",
      "rate": 2.25
    },
    {
      "id": 32,
      "year": "2015-2016",
      "option": "truncated",
      "title": "Purchaser of Auctioned Goods(@4%)",
      "rate": 4
    },
    {
      "id": 33,
      "year": "2015-2016",
      "option": "truncated",
      "title": "Sponsorship Service(@7.5%)",
      "rate": 7.5
    },
    {
      "id": 34,
      "year": "2015-2016",
      "option": "truncated",
      "title": "Building Construction Firm(1-1100 sq. ft.) (@ 1.5%)",
      "rate": 1.5
    },
    {
      "id": 35,
      "year": "2015-2016",
      "option": "truncated",
      "title": "Building Construction Firm(1101-1600 sq. ft.) (@ 2.5%)",
      "rate": 2.5
    },
    {
      "id": 36,
      "year": "2015-2016",
      "option": "truncated",
      "title": "Building Construction Firm(>1601  sq. ft. & above) (@ 4.5%)",
      "rate": 4.5
    },
    {
      "id": 37,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S010.20-Building Construction Firm(1601 sq. ft. & above) (@ 4.5%)",
      "rate": 4.5
    },
    {
      "id": 38,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S010.20-Building Construction Firm(1101-1600 sq. ft.) (@ 2.5%)",
      "rate": 2.5
    },
    {
      "id": 39,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S010.20-Building Construction Firm(1-1100 sq. ft.) (@ 1.5%)",
      "rate": 1.5
    },
    {
      "id": 40,
      "year": "2017-2018",
      "option": "truncated",
      "title": "Sponsorship Service(@7.5%)",
      "rate": 7.5
    },
    {
      "id": 41,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S060.00-Purchaser of Auctioned Goods(@4%)",
      "rate": 4
    },
    {
      "id": 42,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S048.00-Transport Contractor Non-Petroleum(@10%)",
      "rate": 10
    },
    {
      "id": 43,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S048.00-Transport Contractor - Petroleum(@4.5%)",
      "rate": 4.5
    },
    {
      "id": 44,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S037.00-Procurement Provider(@5%)",
      "rate": 5
    },
    {
      "id": 45,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S024.00-Furniture (Trading-having VAT Challan)(@4%)",
      "rate": 4
    },
    {
      "id": 46,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S024.00-Furniture (Manufacturing)(@6%)",
      "rate": 6
    },
    {
      "id": 47,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S010.10Land Development Firm(@3%)",
      "rate": 3
    },
    {
      "id": 48,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S004.00-Construction Firm(@6%)",
      "rate": 6
    },
    {
      "id": 49,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S003.20-Dockyard(@10%)",
      "rate": 10
    },
    {
      "id": 50,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S003.10-Motor Car Garage and Workshop(@10%)",
      "rate": 10
    },
    {
      "id": 51,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S099.10-IT Enabled Services - ITES(@4.5%)",
      "rate": 4.5
    },
    {
      "id": 52,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S024.00-Furniture (Trading-without manufacturing VAT Challan)(@10%)",
      "rate": 10
    },
    {
      "id": 53,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S001.20-Non-ac Restaurant (@7.5%)",
      "rate": 7.5
    },
    {
      "id": 54,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S026.00-Goldsmith & Silversmith (@5%)",
      "rate": 5
    },
    {
      "id": 55,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S069.00-English medium school (@7.5%)",
      "rate": 7.5
    },
    {
      "id": 56,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S078.00-Branded Garments (@4%)",
      "rate": 4
    },
    {
      "id": 57,
      "year": "2017-2018",
      "option": "truncated",
      "title": "S057.00-Electricity Distribution(@5%)",
      "rate": 5
    }
]

const vat_option = [
    {
        label: 'Standard',
        value: 'Standard',
    },
    {
        label: 'Truncated',
        value: 'Truncated',
    },
];

const vat_year = [
    {
        label: '2017-2018',
        value: '2017-2018',
    },
    {
        label: '2016-2017',
        value: '2016-2017',
    },
    {
        label: '2015-2016',
        value: '2015-2016',
    },
    {
        label: '2014-2015',
        value: '2014-2014',
    },
    {
        label: '2013-2014',
        value: '2013-2014',
    },
    {
        label: '2012-2013',
        value: '2012-2013',
    },
];

const service = [
    {
      "id": 2,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S010.20-Building Construction Firm(1601 sq. ft. & above) (@ 4.5%)",
      "value": 4.5
    },
    {
      "id": 3,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S010.20-Building Construction Firm(1101-1600 sq. ft.) (@ 2.5%)",
      "value": 2.5
    },
    {
      "id": 4,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S010.20-Building Construction Firm(1-1100 sq. ft.) (@ 1.5%)",
      "value": 1.5
    },
    {
      "id": 5,
      "year": "2016-2017",
      "option": "truncated",
      "label": "Sponsorship Service(@7.5%)",
      "value": 7.5
    },
    {
      "id": 6,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S060.00-Purchaser of Auctioned Goods(@4%)",
      "value": 4
    },
    {
      "id": 7,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S048.00-Transport Contractor Non-Petroleum(@10%)",
      "value": 10
    },
    {
      "id": 8,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S048.00-Transport Contractor - Petroleum(@4.5%)",
      "value": 4.5
    },
    {
      "id": 9,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S037.00-Procurement Provider(@5%)",
      "value": 5
    },
    {
      "id": 10,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S024.00-Furniture (Trading-having VAT Challan)(@4%)",
      "value": 4
    },
    {
      "id": 11,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S024.00-Furniture (Manufacturing)(@6%)",
      "value": 6
    },
    {
      "id": 12,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S010.10Land Development Firm(@3%)",
      "value": 3
    },
    {
      "id": 13,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S004.00-Construction Firm(@6%)",
      "value": 6
    },
    {
      "id": 14,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S003.20-Dockyard(@10%)",
      "value": 10
    },
    {
      "id": 15,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S003.10-Motor Car Garage and Workshop(@10%)",
      "value": 10
    },
    {
      "id": 16,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S099.10-IT Enabled Services - ITES(@4.5%)",
      "value": 4.5
    },
    {
      "id": 17,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S024.00-Furniture (Trading-without manufacturing VAT Challan)(@10%)",
      "value": 10
    },
    {
      "id": 18,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S001.20-Non-ac Restaurant (@7.5%)",
      "value": 7.5
    },
    {
      "id": 19,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S026.00-Goldsmith & Silversmith (@5%)",
      "value": 5
    },
    {
      "id": 20,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S069.00-English medium school (@7.5%)",
      "value": 7.5
    },
    {
      "id": 21,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S078.00-Branded Garments (@4%)",
      "value": 4
    },
    {
      "id": 22,
      "year": "2016-2017",
      "option": "truncated",
      "label": "S057.00-Electricity Distribution(@5%)",
      "value": 5
    },
    {
      "id": 23,
      "year": "2015-2016",
      "option": "truncated",
      "label": "IT Enabled Services - ITES(@4.5%)",
      "value": 4.5
    },
    {
      "id": 24,
      "year": "2015-2016",
      "option": "truncated",
      "label": "Motor Car Garage and Workshop(@7.5%)",
      "value": 7.5
    },
    {
      "id": 25,
      "year": "2015-2016",
      "option": "truncated",
      "label": "Dockyard(@7.5%)",
      "value": 7.5
    },
    {
      "id": 26,
      "year": "2015-2016",
      "option": "0",
      "label": "Construction Firm(@5.5%)",
      "value": 5.5
    },
    {
      "id": 27,
      "year": "2015-2016",
      "option": "truncated",
      "label": "Land Development Firm(@3%)",
      "value": 3
    },
    {
      "id": 28,
      "year": "2016-2017",
      "option": "truncated",
      "label": "Furniture (Manufacturing)(@6%)",
      "value": 6
    },
    {
      "id": 29,
      "year": "2015-2016",
      "option": "truncated",
      "label": "Furniture (Trading-having VAT Challan)(@4%)",
      "value": 4
    },
    {
      "id": 30,
      "year": "2015-2016",
      "option": "truncated",
      "label": "Procurement Provider(@4%)",
      "value": 4
    },
    {
      "id": 31,
      "year": "2015-2016",
      "option": "truncated",
      "label": "Transport Contractor - Petroleum(@2.25%)",
      "value": 2.25
    },
    {
      "id": 32,
      "year": "2015-2016",
      "option": "truncated",
      "label": "Purchaser of Auctioned Goods(@4%)",
      "value": 4
    },
    {
      "id": 33,
      "year": "2015-2016",
      "option": "truncated",
      "label": "Sponsorship Service(@7.5%)",
      "value": 7.5
    },
    {
      "id": 34,
      "year": "2015-2016",
      "option": "truncated",
      "label": "Building Construction Firm(1-1100 sq. ft.) (@ 1.5%)",
      "value": 1.5
    },
    {
      "id": 35,
      "year": "2015-2016",
      "option": "truncated",
      "label": "Building Construction Firm(1101-1600 sq. ft.) (@ 2.5%)",
      "value": 2.5
    },
    {
      "id": 36,
      "year": "2015-2016",
      "option": "truncated",
      "label": "Building Construction Firm(>1601  sq. ft. & above) (@ 4.5%)",
      "value": 4.5
    },
    {
      "id": 37,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S010.20-Building Construction Firm(1601 sq. ft. & above) (@ 4.5%)",
      "value": 4.5
    },
    {
      "id": 38,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S010.20-Building Construction Firm(1101-1600 sq. ft.) (@ 2.5%)",
      "value": 2.5
    },
    {
      "id": 39,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S010.20-Building Construction Firm(1-1100 sq. ft.) (@ 1.5%)",
      "value": 1.5
    },
    {
      "id": 40,
      "year": "2017-2018",
      "option": "truncated",
      "label": "Sponsorship Service(@7.5%)",
      "value": 7.5
    },
    {
      "id": 41,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S060.00-Purchaser of Auctioned Goods(@4%)",
      "value": 4
    },
    {
      "id": 42,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S048.00-Transport Contractor Non-Petroleum(@10%)",
      "value": 10
    },
    {
      "id": 43,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S048.00-Transport Contractor - Petroleum(@4.5%)",
      "value": 4.5
    },
    {
      "id": 44,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S037.00-Procurement Provider(@5%)",
      "value": 5
    },
    {
      "id": 45,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S024.00-Furniture (Trading-having VAT Challan)(@4%)",
      "value": 4
    },
    {
      "id": 46,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S024.00-Furniture (Manufacturing)(@6%)",
      "value": 6
    },
    {
      "id": 47,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S010.10Land Development Firm(@3%)",
      "value": 3
    },
    {
      "id": 48,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S004.00-Construction Firm(@6%)",
      "value": 6
    },
    {
      "id": 49,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S003.20-Dockyard(@10%)",
      "value": 10
    },
    {
      "id": 50,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S003.10-Motor Car Garage and Workshop(@10%)",
      "value": 10
    },
    {
      "id": 51,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S099.10-IT Enabled Services - ITES(@4.5%)",
      "value": 4.5
    },
    {
      "id": 52,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S024.00-Furniture (Trading-without manufacturing VAT Challan)(@10%)",
      "value": 10
    },
    {
      "id": 53,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S001.20-Non-ac Restaurant (@7.5%)",
      "value": 7.5
    },
    {
      "id": 54,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S026.00-Goldsmith & Silversmith (@5%)",
      "value": 5
    },
    {
      "id": 55,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S069.00-English medium school (@7.5%)",
      "value": 7.5
    },
    {
      "id": 56,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S078.00-Branded Garments (@4%)",
      "value": 4
    },
    {
      "id": 57,
      "year": "2017-2018",
      "option": "truncated",
      "label": "S057.00-Electricity Distribution(@5%)",
      "value": 5
    }
]

export default class Act1991ScreenCalculator extends React.Component {
    static navigationOptions = {
        title: 'Act 1991',
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#168814',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props){
        super(props);
        this.inputRefs = {
            option: null,
            vat_year: null,
            service: null,
        };

        this.state = {
            amount: 0,
            vatamount: 0,
            value: 0,
            flag:false,
            exclude: false,
            include: true,
            option: 'Standard',
            vat_year: '2017-2018',
            service: null

        }
    }

    componentWillMount() {
        console.log('loaded')
    }

    _renderResult = () => {
        if (this.state.flag) {
            return (
                <View style={{paddingVertical: 15,}}>
                    <Text style={{fontWeight:'bold', color:'green', paddingHorizontal: 10, paddingBottom: 5, fontSize: 18}}>Result</Text>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={{fontWeight:'bold', color:'black', paddingHorizontal: 10, fontSize: 15}}>VAT amount:</Text>
                        <Text style={{fontWeight:'bold', color:'black', paddingHorizontal: 10, fontSize: 18}}>{this.state.vatamount}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={{fontWeight:'bold', color:'black', paddingHorizontal: 10, fontSize: 15}}>Value:</Text>
                        <Text style={{fontWeight:'bold', color:'black', paddingHorizontal: 10, fontSize: 18}}>{this.state.value}</Text>
                    </View>
                </View>
            );
        } else {
            return null;
        }
    }
    

    render() {
        var {height, SCREEN_WIDTH} = Dimensions.get('window');
        const placeholder = {
            label: 'Select an option',
            color: '#9EA0A4',
        };
        const placeholder2 = {
            label: 'Select Service',
            color: '#9EA0A4',
        };
        return (
            <ScrollView>
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Text style={{color: '#ADB5B1', margin:3}}></Text>
                {this._renderResult()}
                <ThemeProvider
                    theme={{
                    Input: {
                        inputContainerStyle: {
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: '#ADB5B1',
                            height: 50,
                            marginVertical: 10,
                            width: 280
                        },
                        placeholderTextColor: '#ADB5B1',
                            inputStyle: {
                            marginLeft: 10,
                            color: '#ADB5B1',
                        },
                        keyboardAppearance: 'light',
                        blurOnSubmit: false,
                    },
                    }}
                >
                    <View
                    style={{
                        width: SCREEN_WIDTH,
                        alignItems: 'flex-start',
                        paddingBottom: 30,
                    }}
                    >
                    <Text>VAT Rate</Text>
                    <RNPickerSelect
                        placeholder={placeholder}
                        items={vat_option}
                        onValueChange={value => {
                            this.setState({
                                option: value,
                            });
                        }}
                        style={pickerSelectStyles}
                        value={this.state.option}
                        useNativeAndroidPickerStyle={false}
                        ref={el => {
                            this.inputRefs.option = el;
                        }}
                    />
                    {this.state.option == 'Truncated' ? (
                        <View>
                            <Text>YEAR</Text>
                            <RNPickerSelect
                                items={vat_year}
                                onValueChange={value => {
                                    this.setState({
                                        vat_year: value,
                                    });
                                }}
                                style={pickerSelectStyles}
                                value={this.state.vat_year}
                                useNativeAndroidPickerStyle={false}
                                ref={el => {
                                    this.inputRefs.vat_year = el;
                                }}
                            />
                            <Text>Service</Text>
                            <RNPickerSelect
                                placeholder={placeholder2}
                                items={service}
                                onValueChange={value => {
                                    this.setState({
                                        service: value,
                                    });
                                }}
                                style={pickerSelectStyles}
                                value={this.state.service}
                                useNativeAndroidPickerStyle={false}
                                ref={el => {
                                    this.inputRefs.option = el;
                                }}
                            />
                        </View>
                    ): null }
                    
                    <Text>Base Value</Text>
                    <View>
                        <CheckBox
                            title='VAT Exclusive'
                            checked={this.state.exclude}
                            onPress={() => {
                                this.setState({exclude: !this.state.exclude})
                                this.setState({include: !this.state.include})
                            }}
                            checkedColor="#8BC34A"
                        />
                        <CheckBox
                            title='VAT Inclusive'
                            checked={this.state.include}
                            onPress={() => {
                                this.setState({exclude: !this.state.exclude})
                                this.setState({include: !this.state.include})
                            }}
                            checkedColor="#8BC34A"
                        />
                    </View>
                    <Text>Price</Text>
                    <Input
                        leftIcon={
                        <FontAwesome
                            name="wpforms"
                            color="#ADB5B1"
                            size={25}
                        />
                        }
                        placeholder="Enter amount"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        onChangeText={(amount) => this.setState({amount})}
                    />
                    <Button
                        title="Calculate"
                        containerStyle={{paddingTop: 20,}}
                        buttonStyle={{
                            backgroundColor: '#8BC34A', 
                            width: 280,
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: '#8BC34A',
                        }}
                        onPress={() => {

                            if(this.state.amount > 0){
                                if(this.state.option == 'Standard'){
                                    if(this.state.exclude){
                                        //alert('price excluding');
                                        let vatamount = parseFloat(this.state.amount*.15);
                                        let value = parseFloat(this.state.amount);
                                        value = (value+vatamount).toFixed(2);
                                        vatamount = vatamount.toFixed(2);
                                        this.setState({vatamount});
                                        this.setState({value});
                                    }else{
                                        let value = (parseFloat(this.state.amount)*100)/115;
                                        let vatamount = parseFloat(this.state.amount)-value;
                                        value = value.toFixed(2);
                                        vatamount = vatamount.toFixed(2);
                                        this.setState({vatamount});
                                        this.setState({value});
                                    }
                                }
                                else{
                                    if(this.state.exclude){
                                        //alert('price excluding');
                                        let vatamount = parseFloat(this.state.amount*this.state.service/100);
                                        let value = parseFloat(this.state.amount);
                                        value = (value+vatamount).toFixed(2);
                                        vatamount = vatamount.toFixed(2);
                                        this.setState({vatamount});
                                        this.setState({value});
                                    }else{
                                        let koko = parseFloat(this.state.service)+100;
                                        let value = (parseFloat(this.state.amount)*100)/koko;
                                        let vatamount = parseFloat(this.state.amount)-value;
                                        value = value.toFixed(2);
                                        vatamount = vatamount.toFixed(2);
                                        this.setState({vatamount});
                                        this.setState({value});
                                    }
                                }
                                
                                
                            }
                            this.setState({
                                flag: true
                            });


                        }}
                    />
                    </View>
                </ThemeProvider>
                
            </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'gray',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      width: 300,
    },
  });
  