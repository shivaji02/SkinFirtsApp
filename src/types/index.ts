// src/types/index.ts

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

export interface Auth  {
    isValidated  : boolean;
};


export interface CustomImageProps {
    source: string | any;
    alt?: string; // Optional property
    size?: number; // Optional property
    onLoad?: () => void; // Optional property
    borderRadius?: number;

}