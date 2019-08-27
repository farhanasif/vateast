import React from 'react';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import HomeScreen from './components/Home/HomeScreen';
import RegulationHomeScreen from './components/Regulations/RegulationsHomeScreen';
import RegulationHomeScreen2 from './components/Regulations/RegulationHomeScreen2';
import FinanceActScreen from './components/Regulations/FinanceActScreen';
import VatAct1991Screen from './components/Regulations/VatAct1991Screen';
import VatSDAct2012BanScreen from './components/Regulations/VatSDAct2012BanScreen';
import WeblinkScreen from './components/Regulations/WeblinkScreen';
import VatAct2012EngScreen from './components/Regulations/VatAct2012EngScreen';
import CheckBinScreen from './components/CheckBin/CheckBinScreen';
import ResourcesHomeScreen from './components/Resources/ResourcesHomeScreen2';
import ReportsHomeSCreen2 from './components/Reports/ReportsHomeScreen2';
import FormsHomeScreen from './components/Forms/FormsHomeScreen2';
import OnlineHomeSCreen from './components/Online/OnlineHomeScreen2';
import LearningHomeScreen from './components/Learning/LearningHomeScreen2';
import ComplainLoginScreen from './components/Complain/ComplainLoginScreen';
import SupportHomeSCreen from './components/Support/SupportHomeScreen2';
import CheckBinDetailScreen from './components/CheckBin/CheckBinDetailScreen';
import ComplainScreen from './components/Complain/ComplainScreen';
import UserSignupScreen from './components/User/UserSignupScreen';
import UserOtpScreen from './components/User/UserOtpScreen';
import UserProfileScreen from './components/User/UserProfileScreen';

import Act2012Screen from './components/Calculator/Act2012Screen';
import Act1991ScreenCalculator from './components/Calculator/Act1991ScreenCalculator';

console.disableYellowBox = true;

const TabNavigator = createMaterialTopTabNavigator({
  Act1991ScreenCalc: Act1991ScreenCalculator,
  Act2012Screen: Act2012Screen,
},{
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'green',
    },
  },
  navigationOptions: {
    title: 'VAT CALCULATOR',
    headerStyle: {
        backgroundColor: '#168814',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
  }
});

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Regulations: RegulationHomeScreen2,
    FinanceActScreen: FinanceActScreen,
    VatAct1991Screen: VatAct1991Screen,
    VatSDAct2012BanScreen: VatSDAct2012BanScreen,
    VatAct2012EngScreen: VatAct2012EngScreen,
    WeblinkScreen: WeblinkScreen,
    CheckBinScreen: CheckBinScreen,
    ResourcesHomeScreen: ResourcesHomeScreen,
    ReportsHomeSCreen: ReportsHomeSCreen2,
    FormsHomeScreen: FormsHomeScreen,
    OnlineHomeSCreen: OnlineHomeSCreen,
    LearningHomeScreen: LearningHomeScreen,
    ComplainLoginScreen: ComplainLoginScreen,
    SupportHomeSCreen: SupportHomeSCreen,
    Act2012ScreenCalculator: TabNavigator,
    CheckBinDetailScreen: CheckBinDetailScreen,
    ComplainScreen: ComplainScreen,
    UserSignupScreen: UserSignupScreen,
    UserOtpScreen: UserOtpScreen,
    UserProfileScreen: UserProfileScreen
  },
  {
    initialRouteName: "Home"
  }
);



const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}