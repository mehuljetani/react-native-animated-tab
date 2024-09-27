import {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import Tab from 'react-native-animated-tab';

const options = ['tab1', 'tab2', 'tab3'];

const App = () => {
  const [selectedOption, setSelectedOption] = useState('tab2');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#000'} />
      <Tab
        options={options}
        animationType="spring"
        activeLabelColor="#fff"
        inactiveLabelColor="teal"
        activeBackgroundColor="teal"
        selectedOption={selectedOption}
        onOptionPress={setSelectedOption}
        springConfig={{damping: 18, stiffness: 150}}
        containerStyle={{marginVertical: 30, backgroundColor: '#fff'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});

export default App;
