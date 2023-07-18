import * as React from 'react';
import { View, useWindowDimensions,StyleSheet,StatusBar,TouchableOpacity,Animated } from 'react-native';
import { TabView, SceneMap, TabBar,TabBarIndicator } from 'react-native-tab-view';
import CustomHeader from '../../components/CustomHeader';
import TodaysOrder from './todaysOrder';



const SecondRoute = () => (
  <View style={{ flex: 1 }} />
);


const renderScene = SceneMap({
  first: TodaysOrder,
  second: SecondRoute,
});

export default function Orders() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'todays Order' },
    { key: 'second', title: 'Completed' },
  ]);



  return (
    <View style={{ flex: 1 }}>
        <CustomHeader title="Orders" showBackButton />
    <View style={{flex:1, backgroundColor:'#fff' }}>
        
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
renderTabBar={props => <TabBar {...props} style={{backgroundColor: 'black'}}/>}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    </View>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      flexDirection: 'row',
      paddingTop: StatusBar.currentHeight,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      padding: 16,
    },
  });