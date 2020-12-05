import React, {useState} from 'react';

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32,20,126)');

  const changeBg = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ');';

    setRandomColor(color);
  };

  const Reset = () => {
    setRandomColor('rgb(0,0,0)');
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[a.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBg}>
          <Text style={[a.text]}> Tap Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Reset}>
          <Text style={[a.text2]}> Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const a = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
  },
  text2: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
  },
});
