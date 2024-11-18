import { StyleSheet, useWindowDimensions } from "react-native"
import { FontStyle, LeagueSpartanFont } from "../../../theme/fontStyle"
import { COLORS } from "../../../theme/colors"

export const useStyle =()=>{

    const dimensions = useWindowDimensions();
    const currentHeight = dimensions.height;
    // const currentWidth = dimensions.width;

    return StyleSheet.create({
        flexContainer:{
            flexGrow:1,
            paddingHorizontal:'12.5%',
            alignItems:'center',
            justifyContent:'center',
            gap:"10.5%",
            marginTop:dimensions.width>=currentHeight?0:"30%",
            // paddingTop:'30%'
            paddingVertical:dimensions.width>=currentHeight?50:0,
        },
        logoStyle:{
            width:138,
            height:138
        },
        logoContainer:{
            alignItems:'center',
            rowGap:14,
        },
        logoText:{
            textAlign:'center',
            ...FontStyle({color:COLORS.primary.main, fontsize:48, fontFamily:'Thin', lineHeight:44.16})
        },
        logoSubText:{
            textAlign:'center',
            ...FontStyle({color:COLORS.primary.main, fontsize:12, fontFamily:'SemiBold', lineHeight:11.04})
        },
        infoText:{
            textAlign:'center',
            ...FontStyle({fontsize:12, fontFamily:'Light', lineHeight:11.04}),
            height:50
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
        }
    })
}