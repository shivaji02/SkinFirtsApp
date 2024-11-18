import { ActivityIndicator, ActivityIndicatorProps } from "react-native"
import { COLORS } from "../../theme/colors"

export const Indicator : React.FC<{props?:ActivityIndicatorProps}> = ({props}) =>{
   return (
    <ActivityIndicator color={props?.color||COLORS.common.white} size={props?.size} />
   )
}