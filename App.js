import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './components/Home/HomeScreen';
import RegulationsHomeSCreen from './components/Regulations/RegulationsHomeScreen';
import FinanceActScreen from './components/Regulations/FinanceActScreen';
import VatAct1991Screen from './components/Regulations/VatAct1991Screen';
import VatSDAct2012BanScreen from './components/Regulations/VatSDAct2012BanScreen';
import WeblinkScreen from './components/Regulations/WeblinkScreen';
import VatAct2012EngScreen from './components/Regulations/VatAct2012EngScreen';
import CheckBinScreen from './components/CheckBin/CheckBinScreen';
import ResourcesHomeScreen from './components/Resources/ResourcesHomeScreen';
import ReportsHomeSCreen from './components/Reports/ReportsHomeScreen';
import FormsHomeScreen from './components/Forms/FormsHomeScreen';
import OnlineHomeSCreen from './components/Online/OnlineHomeScreen';
import LearningHomeScreen from './components/Learning/LearningHomeScreen';
import ComplainLoginScreen from './components/Complain/ComplainLoginScreen';
import SupportHomeSCreen from './components/Support/SupportHomeScreen';

import Act2012Screen from './components/Calculator/Act2012Screen';

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Regulations: RegulationsHomeSCreen,
    FinanceActScreen: FinanceActScreen,
    VatAct1991Screen: VatAct1991Screen,
    VatSDAct2012BanScreen: VatSDAct2012BanScreen,
    VatAct2012EngScreen: VatAct2012EngScreen,
    WeblinkScreen: WeblinkScreen,
    CheckBinScreen: CheckBinScreen,
    ResourcesHomeScreen: ResourcesHomeScreen,
    ReportsHomeSCreen: ReportsHomeSCreen,
    FormsHomeScreen: FormsHomeScreen,
    OnlineHomeSCreen: OnlineHomeSCreen,
    LearningHomeScreen: LearningHomeScreen,
    ComplainLoginScreen: ComplainLoginScreen,
    SupportHomeSCreen: SupportHomeSCreen,
    Act2012Screen: Act2012Screen,
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