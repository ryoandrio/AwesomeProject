import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const Error = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('./images/error.png')}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <Text style={style.title}>Error 404</Text>
      <Text style={style.subtitle}>Not Found</Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
  },
  subtitle: {
    fontSize: 50,
  },
});

export default Error;
