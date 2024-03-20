import { CommonActions, StackActions } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

let navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  navigator = navigatorRef;
}

function navigate(routeName: string, params?: object) {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}
function pop(n = 1) {
  navigator.dispatch(
    StackActions.pop({
      n: n,
    }),
  );
}
function push(routeName: string) {
  navigator.dispatch(StackActions.push(routeName));
}
function reset(route: string) {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: route }],
    }),
  );
}

function goBack() {
  navigator.dispatch(CommonActions.goBack());
  // navigator._navigation.goBack();
}
function openDrawer() {
  navigator.dispatch(DrawerActions.openDrawer());
}
function closeDrawer() {
  navigator.dispatch(DrawerActions.closeDrawer());
}

function replace(routeName: string, params?: object) {
  navigator.dispatch(StackActions.replace(routeName, params));
}
// add other navigation functions that you need and export them

export default {
  goBack,
  navigate,
  setTopLevelNavigator,
  openDrawer,
  closeDrawer,
  pop,
  reset,
  push,
  replace,
};
