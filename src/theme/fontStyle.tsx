import { COLORS } from "./colors";

export const LeagueSpartanFont ={  
    Thin:"LeagueSpartan-Thin",//100
    ExtraLight:"LeagueSpartan-ExtraLight",//200
    Light:"LeagueSpartan-Light",//300
    Regular:"LeagueSpartan-Regular",//400
    Medium:"LeagueSpartan-Medium",//500
    SemiBold:"LeagueSpartan-SemiBold",//600
    Bold:"LeagueSpartan-Bold",//700
    ExtraBold:"LeagueSpartan-ExtraBold",//800
    Black:"LeagueSpartan-Black",//900
}

export const FontStyle =({ color = COLORS.common.black, fontsize, fontFamily, lineHeight}: { color?: string; fontsize?: number | undefined; fontFamily: LeagueSpartanFontFamily|string; lineHeight?:number})=>{
    return{
        color: color,
        fontSize: fontsize,
        fontFamily: isFontFamilyKey(fontFamily) ?  LeagueSpartanFont[fontFamily as LeagueSpartanFontFamily]:fontFamily ,
        ...(lineHeight && { lineHeight })
    }
}

export type LeagueSpartanFontFamily = keyof typeof LeagueSpartanFont;

export const isFontFamilyKey = (key: string): key is LeagueSpartanFontFamily => {
    return key in LeagueSpartanFont;
};