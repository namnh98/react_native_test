import React from 'react';
import { View, Text, ImageBackground, SafeAreaView } from 'react-native';
import { IMG_BackgroundSignUp } from '@/assets';
import styles from './SignUp.styles';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '@/constants';
import { Header } from '@/components';

const SignUpView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={IMG_BackgroundSignUp} style={styles.imageBackground}>
        <LinearGradient
          colors={[COLORS.TRANSPARENT, COLORS.BLACK_DEFAULT]}
          style={styles.containerLinearGradient}
          useAngle={true}
          angle={180}
          angleCenter={{ x: 0.5, y: 0.2 }}>
          <View style={styles.wrapperContent}>
            <Header />
            <View style={styles.bodyContainer}>
              <Text style={styles.titleBody}>Let’s get you started!</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUpView;
