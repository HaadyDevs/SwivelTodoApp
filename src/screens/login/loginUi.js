import React from 'react';

import styles from './style';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ActivityIndicator,
  Text,
  TouchableWithoutFeedback,
  Pressable,
  View,
} from 'react-native';
import PrimaryButton from '../../components/atoms/primary-button';
import PrimaryTextField from '../../components/atoms/primary-textfield';
import LogoTitle from '../../components/atoms/logo-title';
import {PRIMARY} from '../../styles/colors';
import {SUBTITLE_TEXT} from '../../styles/typography';
import VerticalSpace from '../../components/atoms/vertical-spacer';
import ErrorText from '../../components/atoms/error-text';

export default function LoginUI(props) {
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginFormView}>
          <VerticalSpace height={40} />
          <LogoTitle title={'Do IT'} size={60} color={PRIMARY} />
          <Text style={SUBTITLE_TEXT}>Welcome Back</Text>
          <VerticalSpace height={40} />
          <View style={{width: '90%'}}>
            <PrimaryTextField
              onChange={text => props.setUsername(text)}
              placeholder={'Email'}
            />
            <PrimaryTextField
              placeholder={'Password'}
              isPassword={true}
              onChange={text => props.setPassword(text)}
            />
            <VerticalSpace height={20} />
            {props.isError && (
              <ErrorText title={'Invalid Username / Password'} />
            )}
            <VerticalSpace height={30} />
            {props.isLoading ? (
              <ActivityIndicator size="large" color={PRIMARY} />
            ) : (
              <PrimaryButton
                onPress={() => props.onLoginPress()}
                title="LOGIN"
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
