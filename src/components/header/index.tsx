import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { IC_Back } from '@/assets';
import { useNavigation } from '@react-navigation/native';

const Header = ({ text }: { text?: string }) => {
  const navigation = useNavigation();

  const pressBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonLeft} activeOpacity={1} hitSlop={1} onPress={pressBack}>
        <Image source={IC_Back} style={styles.imageLeft} />
      </TouchableOpacity>
      <Text style={styles.titleHeader}>{text}</Text>
    </View>
  );
};

export default Header;
