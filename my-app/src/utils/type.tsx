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

export type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img: string;
    color: string;
};