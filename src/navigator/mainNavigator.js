import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList67701Navigator from '../features/ArticleList67701/navigator';
import ArticleList67700Navigator from '../features/ArticleList67700/navigator';
import ArticleList67699Navigator from '../features/ArticleList67699/navigator';
import ArticleList67676Navigator from '../features/ArticleList67676/navigator';
import ArticleList67675Navigator from '../features/ArticleList67675/navigator';
import ArticleList67674Navigator from '../features/ArticleList67674/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList67701: { screen: ArticleList67701Navigator },
ArticleList67700: { screen: ArticleList67700Navigator },
ArticleList67699: { screen: ArticleList67699Navigator },
ArticleList67676: { screen: ArticleList67676Navigator },
ArticleList67675: { screen: ArticleList67675Navigator },
ArticleList67674: { screen: ArticleList67674Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
