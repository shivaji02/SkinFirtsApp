import { AppointmentT } from './index';
// src/types/index.ts

import { TextInputProps, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

// Define a type for a User
export interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string; // Optional property
}


// Define a type for Navigation Props (React Navigation)
export type RootStackParamList = {
  Home: undefined;
  Details: { productId: number };
  Profile: { userId: number };
};

// Add more types as needed for your project

export interface Auth {
  isValidated: boolean;
}


export interface CustomImageProps {
  source: string | { uri: string } | any;
  alt?: string; // Optional property
  size?: number; // Optional property
  onLoad?: () => void; // Optional property
  height?: number; // Optional property
  width?: number; // Optional property
  borderRadius?: number;
  style?: any;


}

export interface AppBottomTabT {
  size: number;
  focused: boolean;

}


export interface PersonalDetailsT {

  name: String;

  age: number;

  email: String;

  address: {

    street: string;

    city: string;

    state: string;

    pin: string;
  };
  phone: string;
}

export interface CustomIconProps {
  IconComponent: React.FC<SvgProps>;
  size?: number;
  onPress?: () => void;
  text?: string;
  style?: ViewStyle;
  backgroundColor?: string; // Add background color
  iconColor?: string;       // Add icon color for the SVG component
  padding?: number;         // Optional padding around the icon
}


export interface SearchBarProps extends TextInputProps {
  bgColor?: string;
  height?: number;
  width?: number | string;
  // leftIcon?: React.ComponentType;
  // rightIcon?: React.ComponentType;
  leftIcon?: React.FC<SvgProps>;
  rightIcon?: React.FC<SvgProps>;
  leftIconSize?: number;
  rightIconSize?: number;
  style?: ViewStyle;
  onSearch?: (text: string) => void;
  leftIconStyle?: ViewStyle,
  rightIconStyle?: ViewStyle,
}

export interface AppointmentT {
  time: string;
  title: string;
  description: string;
  isSelected: boolean;
  isCancelled: boolean; // New field for cancelled appointments
}

export interface DayT {
  date: string; // e.g., '2024-11-21'
  day: string;  // e.g., 'Thu'
}

export interface CalendarDataT {
  days: DayT[];
  appointments: {
    date: string;
    slots: AppointmentT[];
  }[];
};

export interface CalendarBoxProps {
  days: DayT[];
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

export interface AppointmentBadgeProps{
  slots: AppointmentT[];
  onConfirm:(time : string)=>void;
  onReject: (time : string) => void;
}


export  interface appointmentsT {
  time: string;
  title: string;
  description: string;
}
