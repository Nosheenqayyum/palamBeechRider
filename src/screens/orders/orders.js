import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import CustomHeader from '../../components/CustomHeader';

const FirstRoute = () => (
  <View style={{ flex: 1 }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1 }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
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
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    </View>
    </View>
  );
}
