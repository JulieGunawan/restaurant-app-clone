import { Session } from "next-auth";

export type Link = {
    id: number;
    title: string;
    url: string;
}

export type Product = {
    id: string;
    img: string;
    title: string;
    desc?: string;
    price:number;
    category?: string;
    options?: {
        title: string;
        additionalPrice: number;
    } [];
}

export type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
};

export type Order = {
    id: string;
    userEmail: string;
    price: number;
    products: CartItem[];
    status: string;
    createdAt: Date;
    intent_id?:string
}

export type OrderStatus = {
    status: "loading" | "authenticated" | "unauthenticated";
    session: Session | null
};


export type CartItem = {
    id: number;
    img?: string;
    title: string;
    desc?: string;
    price: number;
    quantity: number;
    options?: {
        title: string;
        additionalPrice: number;
    } [];
}

export type CartType = {
    products: CartItem[];
    totalItems: number;
    totalPrice: number
}

export type ActionTypes = {
    addToCart:(item:CartItem) => void;
    removeFromCart:(item:CartItem) => void;
}
export type CartStore = CartType & ActionTypes