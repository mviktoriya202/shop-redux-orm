import store from "../redux/store";
import {UseFormReturn} from "react-hook-form";

export type IRootState = ReturnType<typeof store.getState>


export interface ICategory {
    id: number,
    name: string,
    parent_id?: number,
}

export interface IProduct {
    id: number;
    category_id: number;
    description: string;
    name: string;
    count: number;
    image_url?: string;
    price: number;
    stock: number
}

export interface IProductProps {
    id: number;
    category_id: number;
    description: string;
    name: string;
    count?: number;
    addToCart: Function;
    image_url?: string;
    price: number;
    stock: number
}

export interface IInputProps<> {
    label: string;
    type: string;
    id: string;
    register: Function;
    validation?: object;
    errors: any
}

export interface IFormInput {
    date: string;
    time: string;
    address: string;
    name: string;
    telephone: string;
}

export interface IState {
    productError: boolean | null,
    productLoading: boolean,
    categoryLoading: boolean,
    categoryError: boolean,
    showButton: boolean,
    showBanner: boolean
}

export interface IDeliveryFormProps {
    form: UseFormReturn,
    onSubmit: Function
}

export interface IDeliveryCardProps {
    onSubmit: Function
}

export interface IButton {
    title: string;
    size: string;
    onSubmit?: Function | undefined;
    type?: "submit" | "button" | undefined;
}

export interface IOrder {
    id: number;
    clientName: string;
    count: number;
    productName: string;
    address: string;
    date: string;
    image_url?:string;
    stock?:number
}

export interface ICartItem {
    image?: string,
    name: string,
    id: number,
    count?: number,
    sale?: string,
    OnDelete: (id: number) => void,
    OnEdit: (data: IProduct) => void,
    description: string,
    category_id: number,
    price: number,
    stock:number,
    image_url?: string
}

export interface ITag {
    id: number,
    name: string,
    onCLick: (id: number) => void,
    index: number
}