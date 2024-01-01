import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import logo from '../../utils/images/logo.png';
import arrow from '../../utils/images/send.png';

export default function Header(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image 
          source={logo}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={styles.arrow}
          source={arrow}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    borderBottomWidth: .2,
    shadowColor: '#fff',
    elevation: 2,
    paddingLeft: 15,
    paddingRight: 15,
  },
  arrow: {
    width: 20,
    height: 20,
  }
})