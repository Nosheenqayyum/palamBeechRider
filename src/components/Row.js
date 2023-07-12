import {StyleSheet, TouchableOpacity, View, ViewProps} from 'react-native';
import React from 'react';

export default function Row(props: ViewProps) {
  return (
    <TouchableOpacity
      disabled={props?.onPress ? false : true}
      activeOpacity={0.85}
      {...props}
      style={[{flexDirection: 'row', alignItems: 'center'}, props.style]}>
      {props.children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
