import { Menu, Product } from "./type"

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
    },
    {
        id:5,
        image:"/assets/sandwich.jpg",
        title:"Melted Sandwich",
        desc:"Taste the sliced roast beef with melted cheese and arugula on the side",
        price:17.50
    },  
]

export const menus: Menu[] = [
    {
        id:1,
        slug:"breakfast",
        desc:"Breakfast is the most important meal of the day, grab those beast and boost your energy",
        title:"Start Your Day",
        img:"/assets/muffin.jpg",
        color:"blue"
    },
    {
        id:2,
        slug:"pasta",
        desc:" Enjoy the taste of perfection with our exquisite Italian handmade pasta",
        title:"Italianst Pasta",
        img:"/assets/rawPasta.jpg",
        color:"white"
    },
    {
        id:3,
        slug:"sandwich",
        desc:"The perfect way to have your happiness on your plate",
        title:"Lighten Up",
        img:"/assets/baconPickleSandwich.jpg",
        color:"black"
    },
    {
        id:4,
        slug:"fastFood",
        desc:"Irresistible pieces, crunchy, delicious and cheesy",
        title:"Party Time",
        img:"/assets/friedChicken.jpg",
        color:"white"
    }
]

export const sandwiches: Product[] = [
    {
        id:1,
        image:"/assets/baconPickleSandwich.jpg",
        title:"Bacon and Pickle",
        desc:"Combination of bacon and pickles inside a sandwich",
        price:19.50
    },
    { id:2,
        image:"/assets/prociutoSandwich.jpg",
        title:"All about Prociutto",
        desc:"Prosciutto, cheese, and lots of other stuff in a sandwich",
        price:21.00
    },
    {
        id:3,
        image:"/assets/veggieSandwich.jpg",
        title:"Overloaded Veggie Sub",
        desc:"We also have sandwich without meat",
        price:17.50
    },
    {
        id:4,
        image:"/assets/tripleBurger.jpg",
        title:"You can't forget burger",
        desc:"Everybody remembers burger once in a while",
        price:22.50
    },
    {
        id:5,
        image:"/assets/italianSausageSandwich.jpg",
        title:"Fancy Italian Hot Dog",
        desc:"Do you want hot dog but more boogie version?",
        price:20.50
    },
    {
        id:6,
        image:"/assets/falafelSandwich.jpg",
        title:"ChickADoo",
        desc:"Chick peas in a sandwich",
        price:18.50
    }
]

export const singleProduct: Product = {
    id:1,
    image:"/assets/pasta.jpg",
    title:"Healthy Pasta",
    desc:"Get your daily fibers and carbs in this homemade plate",
    price:18.75,
    options: [
        {title:"Add Sausage", additionalPrice: 3},
        {title:"Add Chicken/Beef", additionalPrice: 5},
        {title:"Add Seafood", additionalPrice: 8}
    ]
}