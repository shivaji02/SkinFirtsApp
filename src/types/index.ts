// src/types/index.ts

// Define a type for a User
export interface User {
    id: number;
    name: string;
    email: string;
    avatarUrl?: string; // Optional property
}

// Define a type for a Product
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

// Define a type for an Order
export interface Order {
    id: number;
    userId: number;
    productIds: number[];
    totalAmount: number;
    orderDate: string;
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