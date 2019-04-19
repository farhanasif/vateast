import React from 'react';
import { View, Dimensions, WebView, ActivityIndicator } from 'react-native';
import Loader from '../Others/Loader';




export default class WeblinkScreen extends React.Component {
    static navigationOptions = ({navigation}) => {

        const { params = {} } = navigation.state;
    
        return {
            title: `${params.title}`,
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#168814',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }

    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            url: '',
            loading: false,
        };
    }

    componentDidMount(){
        const { navigation } = this.props;
        this.setState({title : navigation.getParam('title', 'NO-name')})
        this.setState({url : navigation.getParam('url', 'NO-email')})
    }

    componentWillMount() {
        console.log('loaded')
    }
    

    render() {
        var {height, width} = Dimensions.get('window');
        const { url } = this.state;
        if(this.state.loading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
                )
        }
        return (
            <View style={{ flex: 1 }}>   
                <WebView
                    source={{uri: url}}
                    onLoadEnd={() => {
                        console.log('loading finished:'+url)
                    }}
                    style={{flex:1}}
                />
            </View>
        );
    }
}

