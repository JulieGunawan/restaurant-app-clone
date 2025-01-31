import { Product } from "./type"

export const links = [
    {id:1, title:"Homepage", url:"/"},
    {id:2, title:"Menu", url:"/menu"},
    {id:3, title:"Working Hours", url:"/hours"},
    {id:4, title:"Contact", url:"/contact"}
]

export const sliderList = [
    {id:1, title:"Always fresh & crispy", image:"/assets/friedChicken.jpg"},
    {id:2, title:"We deliver wherever you are", image:"/assets/pasta.jpg"},
    {id:3, title:"The best pizza in the country", image:"/assets/pizza.jpg"},
    {id:4, title:"When you need it, it is here", image:"/assets/heroHP.jpg"}
]

export const products: Product[] = [
    {
        id:1,
        image:"/assets/pancake.jpg",
        title:"Stacked Pannenkoek",
        desc:"Imagine a stack of pancakes with a block of butter",
        price:17.50
    },
    {
        id:2,
        image:"/assets/spaghetti.jpg",
        title:"Pizza",
        desc:"The spaghetti in old country with meat sauce",
        price:21.50
    },
    {
        id:3,
        image:"/assets/yamFries.jpg",
        title:"Gourmet Fries",
        desc:"Yam fries with gourmet aeolis",
        price:9.50
    },
    {
        id:4,
        image:"/assets/pizza.jpg",
        title:"Margerita Pizza",
        desc:"The best pizza topped with basil and mozza cheese",
        price:19.90
    }
]