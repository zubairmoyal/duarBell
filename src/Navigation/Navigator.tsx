import {NavigationContainer} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import NavigationService from './NavigationService';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as routes from './routes';
import AuthLoading from '../Screens/AuthLoading';
import Login from '../Screens/AuthFlow/Login';
import IntroScreen from '../Screens/AuthFlow/IntroScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/DashBorad/HomeScreen';
import {colors} from '../Theme/Colors';
import {RNText} from '../Theme/theme';
import Booking from '../Screens/Booking/Booking';
import ImagePath from '../../assets/ImagePath';
import Favorite from '../Screens/Favorite/Favorite';
import Wallet from '../Screens/Wallet/Wallet';
import User from '../Screens/User/User';
import MessageScreen from '../Screens/HearderIconNavigation/MessageScreen';
import NotificationsScreen from '../Screens/HearderIconNavigation/NotificationsScreen';
import CallLogsScreen from '../Screens/HearderIconNavigation/CallLogsScreen';
import SearchScreen from '../Screens/HearderIconNavigation/SearchScreen';
import ServiceListScreen from '../Screens/DashBorad/ServiceListScreen';
import ListScreen from '../Screens/DashBorad/ListScreen';
import CallHistory from '../Screens/DashBorad/CallHistory';
import VerificationOne from '../Screens/User/VerificationOne';
import ManageBookThree from '../Screens/User/ManageBookThree';
import MyAccounts from '../Screens/User/MyAccounts';
import EditProfile from '../Screens/EditProfile';
import ProviderProfile from '../Screens/ProviderProfile';


const Navigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const AuthFlow = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.NAVIGATION_INTRO} component={IntroScreen} />
      <Stack.Screen name={routes.NAVIGATION_LOGIN} component={Login} />
      <Stack.Screen
        options={{}}
        name={routes.NAVIGATION_HONE_STACK}
        component={HomeStack}
      />
    </Stack.Navigator>
  );
  const RootStackScreen = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={routes.NAVIGATION_AUTH_LOADING}
        component={AuthLoading}
      />
      <Stack.Screen
        options={{}}
        name={routes.NAVIGATION_AUTH_FLOW}
        component={AuthFlow}
      />
    </Stack.Navigator>
  );

  const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={routes.NAVIGATION_DASHBOARD_STACK}>
        <Stack.Screen
          name={routes.NAVIGATION_DASHBOARD_STACK}
          component={DashBoard}
        />
      </Stack.Navigator>
    );
  };
  const screenConfigurations = [
    {name: routes.NAVIGATION_HOME_SCREEN, component: HomeScreen},
    {name: routes.NAVIGATION_MESSAGE_SCREEN, component: MessageScreen},
    {
      name: routes.NAVIGATION_NOTIFICATION_SCREEN,
      component: NotificationsScreen,
    },
    {name: routes.NAVIGATION_CALL_LOG_SCREEN, component: CallLogsScreen},
    {name: routes.NAVIGATION_SEARCH_SCREEN, component: SearchScreen},
    {name: routes.NAVIGATION_SERVICE_LIST_SCREEN, component: ServiceListScreen},
    {name: routes.NAVIGATION_LIST_SCREEN, component: ListScreen},
    {name: routes. NAVIGATION_CALLHISTORY, component:CallHistory},


  ];

  const HomeBottomStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {screenConfigurations.map((screenConfig, index) => (
        <Stack.Screen
          key={index}
          name={screenConfig.name}
          component={screenConfig.component}
        />
      ))}
    </Stack.Navigator>
  );

  const screenConfigurationsForBooking = [
    {name: routes.NAVIGATION_BOOKING_SCREEN, component: Booking},
  ];
  const BookingStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {screenConfigurationsForBooking?.map((screenConfig, index) => (
        <Stack.Screen
          key={index}
          name={screenConfig.name}
          component={screenConfig.component}
        />
      ))}
    </Stack.Navigator>
  );

  const screenConfigurationsForFavorite = [
    {name: routes.NAVIGATION_FAVORITE_SCREEN, component: Favorite},
  ]
  const  FavoritesStack = () => (
    <Stack.Navigator  screenOptions={{
      headerShown: false,
    }}>
      { screenConfigurationsForFavorite.map((screenConfig, index) =>(
        <Stack.Screen
        key={index}
        name={screenConfig.name}
        component={screenConfig.component}
        />
      ))}
    </Stack.Navigator>
  )

  const screenConfigurationsForWallet =[
    {name: routes.NAVIGATION_WALEET_SCREEN, component: Wallet},
  ]

  const WalletStack =() => (
    <Stack.Navigator  screenOptions={{
      headerShown: false,
    }}>
      {screenConfigurationsForWallet.map((screenConfig,index)=>(
        <Stack.Screen 
        key={index}
        name={screenConfig.name}
        component={screenConfig.component}
        />
      )) }
    </Stack.Navigator>
  )

  const screenConfigurationsForUser =[
    {name:routes.NAVIGATION_USER_SCREEN,component:User},
    {name: routes.NAVIGATION_VERIFICATION_ONE, component:VerificationOne},
    {name: routes.NAVIGATION_MANAGE_BOOK_THREE, component:ManageBookThree},
    {name:routes.NAVIGATION_MYACCOUNTS, component:MyAccounts},
    {name:routes.NAVIGATION_EDITPROFILE, component:EditProfile},
    {name:routes.NAVIGATION_PROVIDERPROFILE, component:ProviderProfile}


  ]
  const  UserStack=()=>(
    <Stack.Navigator  screenOptions={{
      headerShown: false,
    }}>
      {screenConfigurationsForUser.map((screenConfig,index)=>(
        <Stack.Screen
        key={index}
        name={screenConfig.name}
        component={screenConfig.component}
        
        />
      ))}
    </Stack.Navigator>
  )

  const tabConfigurations = [
    {
      name: routes.NAVIGATION_HOME_BOTTOM_STACK,
      component: HomeBottomStack,
      label: 'Home',
      icon: ImagePath.tabHome,
    },
    {
      name: routes.NAVIGATION_BOOKING_BOTTOM_STACK,
      component: BookingStack,
      label: 'Booking',
      icon: ImagePath.tabOutline,
    },
    {
      name: routes.NAVIGATION_FAVORITE_BOTTOM_STACK,
      component: FavoritesStack,
      label: 'Favorite',
      icon: ImagePath.tabFavroite,
    },
    {
      name: routes.NAVIGATION_WALLET_BOTTOM_STACK,
      component: WalletStack,
      label: 'BellCoins',
      icon: ImagePath.tabWallet,
    },
    {
      name: routes.NAVIGATION_USER_BOTTOM_STACK,
      component: UserStack,
      label: 'Account',
      icon: ImagePath.tabUser,
    },
  ];
  const DashBoard = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabView,
      }}
      initialRouteName={routes.NAVIGATION_HONE_STACK}>
      {tabConfigurations.map((tabConfig, index) => (
        <Tab.Screen
          key={index}
          name={tabConfig.name}
          component={tabConfig.component}
          options={({route}) => ({
            tabBarLabel: ({focused}) => (
              <RNText
                style={styles.txt}
                variant={focused ? 'commonText' : 'provideDetails'}>
                {tabConfig.label}
              </RNText>
            ),
            tabBarIcon: ({focused}) => (
              <Image
                tintColor={focused ? colors.veryDimGray : colors.gray}
                source={tabConfig.icon}
              />
            ),
          })}
        />
      ))}
    </Tab.Navigator>
  );

  return (
    <NavigationContainer
      ref={navigatiorRef => {
        NavigationService.setTopLevelNavigator(navigatiorRef);
      }}>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  tabView: {
    height: 58,
    backgroundColor: colors.white,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  txt: {
    marginBottom: 7,
  },
});
