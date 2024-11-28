import { StyleSheet, useWindowDimensions } from "react-native"
import { FontStyle, LeagueSpartanFont } from "../../../theme/fontStyle"
import { COLORS } from "../../../theme/colors"
import { normalizeFontSize } from "../../../utils/responsiveUtils";

export const useStyle =()=>{

    const dimensions = useWindowDimensions();
    const currentHeight = dimensions.height;
    // const currentWidth = dimensions.width;

    return StyleSheet.create({
        flexContainer:{
            flexGrow:1,
            paddingVertical:dimensions.width>=currentHeight?50:0,
            paddingHorizontal:'8.33%'
        },
        subHeaderText:{
            ...FontStyle({color: COLORS.primary.main, fontsize: 24, fontFamily: 'SemiBold', lineHeight:22.08}),
            marginBottom:dimensions.width>=currentHeight?40:'15%',
            marginVertical:dimensions.width>=currentHeight?0:'15%',
        },
        utilText:{
            ...FontStyle({color: COLORS.primary.main, fontsize: 12, fontFamily: 'Medium', lineHeight:11.04}),
            textAlign:'right',
            margin:10,
            // backgroundColor:'black'
        },
        infoText:{
            textAlign:'center',
            ...FontStyle({fontsize:12, fontFamily:'Light', lineHeight:11.04}),
        },
        buttonsContainer:{
            alignItems:'center',
            paddingTop:'2%',
            gap:7
        },
        subContainer:{
            alignItems:'center'
        },
        buttonStyle:{
            width:207,
            justifyContent:'center',
            alignContent:'center',
        },
        signUpStyle:{
            backgroundColor:COLORS.primary.light,
            width:207,
            justifyContent:'center',
            alignContent:'center',
        },
        fieldsContainer:{
            gap:20
        },
        loginUtil:{
            flexDirection:'row',
            gap:10,
        },
        loginContainer:{
            gap:20,
            alignItems:'center',
            marginVertical:38
        },
        roundButton:{
            width:40,
            height:40,
            backgroundColor:COLORS.primary[300],
            borderRadius:20
        }
    })
}