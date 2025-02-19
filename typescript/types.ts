// filepath: /Users/chao/Documents/projects/ElFrontend/awesome-frontend-exercises/typescript/types.ts
// This file defines TypeScript types and interfaces used throughout the project.

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

export interface Order {
    orderId: number;
    userId: number;
    productIds: number[];
    totalAmount: number;
    orderDate: Date;
}

export type Response<T> = {
    data: T;
    error?: string;
};