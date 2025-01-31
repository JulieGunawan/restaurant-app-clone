export type Link = {
    id: number;
    title: string;
    url: string;
}

export type Product = {
    id: number;
    image: string;
    title: string;
    desc?: string;
    price:number;
    options?: {
        title: string;
        additionalPrice: number;
    } [];
}