import {StyleSheet} from 'react-native';
import {GRAY_MEDIUM, PRIMARY, WHITE} from '../../styles/colors';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 60,
    fontFamily: 'Poppins-Bold',
    marginTop: 80,
    includeFontPadding: false,
    color: PRIMARY,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 17,

    fontFamily: 'Poppins-Light',
    color: PRIMARY,
    marginBottom: 80,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
    alignItems: 'center',
  },
  loginFormTextInput: {
    height: 58,
    width: '90%',
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: GRAY_MEDIUM,
    backgroundColor: WHITE,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: 'center',
  },
});
export default styles;
