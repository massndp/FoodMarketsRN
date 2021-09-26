import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, Text, View} from 'react-native';

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker>
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Lampung" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 1,
  },
});
