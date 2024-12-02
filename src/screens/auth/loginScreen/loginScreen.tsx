import React, { Fragment, useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import { useStyle } from './styles';
import RNTextInput  from '../../../components/customTextInput';
import { BiometricIcon, Eye, EyeOff, FbIcon, GoogleIcon } from '../../../assets/svg/AuthScreenSvg';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { OpacityButton } from '../../../components/button/opacityButton';
import Svg, { SvgProps } from 'react-native-svg';
import { FormikProps } from 'formik';

const LoginScreen = () => {

  const styles = useStyle();
  const [isPassVissible, setPassVisible] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<string|any>>();
  const loginOptions : React.FC<SvgProps>[] = [ GoogleIcon, FbIcon, BiometricIcon] ;
  const initialValues = {
    email: '', 
    password: '' 
  }
  // const formikRef = useRef<FormikProps<any>>(null);
 
  type LoginOptionType = (typeof loginOptions)[number] ;
  
  useEffect(()=>{
    console.log("HELLO from LoginScreen.tsx");
  },[])

  const handleEyeClick= () => {
      setPassVisible(!isPassVissible);
  }

  const handleLoginOptions = (loginType: LoginOptionType) => {
    switch (loginType) {
      case BiometricIcon:
        console.log('Biometric Login Selected');
        break;
      case FbIcon:
        console.log('Facebook Login Selected');
        break;
      case GoogleIcon:
        console.log('Google Login Selected');
        break;
    }
  };

  return (
    <Fragment>
        <KeyboardAvoidingView style={{ flexGrow: 1, }} behavior={"padding"}>
    <ScrollView contentContainerStyle={styles.flexContainer} >
      <Text style={styles.subHeaderText}>Welcome</Text>
      <View style={styles.fieldsContainer}>
       <RNTextInput
       label='Email or Mobile Number'
       placeholder='Enter your Email here'
      //  SvgIcon={EyeOff}
       />
       <RNTextInput
       label='Password'
       placeholder='Enter your Password here'
       secureTextEntry={!isPassVissible}
       SvgIcon={isPassVissible?Eye:EyeOff}
       onIconPress={handleEyeClick}
       />
      </View>
      <Text style={styles.utilText} onPress={()=>navigation.navigate('setPassword')}>Forgot Password</Text>
      <View style={styles.loginContainer}>
      <OpacityButton
              text={'Log In'}
              onPress={() => navigation.navigate("login")}
              buttonStyle={styles.buttonStyle}
            //   textStyle={{color: theme==="dark"? COLORS.common.white: COLORS.common.black}}
            />
            <Text style={styles.infoText}>
            or sign up with
          </Text>
          <View style={styles.loginUtil}>
          {loginOptions.map((loginType,index)=>{
             return <OpacityButton
                       onPress={() => handleLoginOptions(loginType)} 
                       type='svg'
                       SvgIcon={loginType} 
                       key={index}
                      //  svgProps={{width:24,height:24}}
                       buttonStyle={styles.roundButton}/>
             })  
            }
          </View>
        </View>
        <Text style={styles.infoText}>
        Don’t have an account? <Text style={styles.utilText} onPress={()=>navigation.navigate('signUp')}>Sign Up</Text>
          </Text>
    </ScrollView>
    </KeyboardAvoidingView>
   </Fragment>
  );
};

export default LoginScreen;
