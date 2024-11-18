import {Dimensions, PixelRatio, Platform} from 'react-native';

const  {width: screenWidth, height: screenHeight} = Dimensions.get('window');

//consider any screen as base and start responsive from there here iphoneX sizes are considered.
const baseWidth = 375;
const baseHeight = 812;


//Function  to scale size based on screen width
export const scale = (size : number) => (screenWidth / baseWidth) * size;

//FUnctions to scale size  based on Screen Height
export const verticalScale = (size : number)  => (screenHeight / baseHeight) * size;

//Functions to scale size with a factor for more fine-tuned scaling
export const moderateScale = (size :number, factor = 0.5) => size + (scale(size) - size) *factor;

// Function to normalize font sizes across different screen densities

export const normalizeFontSize = (size:number) => {
const newsize = scale(size);
if(Platform.OS === 'ios'){
    return Math.round(PixelRatio.roundToNearestPixel(newsize));
} else {
    return Math.round(PixelRatio.roundToNearestPixel(newsize)) - 2;
}};

// Function to get responsive width percentage
export const widthPercentageToDP = (widthPercent : string | number) =>{
    const elemWidth = typeof widthPercent === 'number' ? widthPercent  : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenHeight * elemWidth) / 100 );
};

// Functions to get responsive Height Percentage;

export const heightPercentageToDP = (heightPercentage : string| number) => {
    const elemHeight = typeof heightPercentage  === 'number' ? heightPercentage : parseFloat(heightPercentage);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight)/100);
};