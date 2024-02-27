// type Draggable = {
//     drag: () => void;
// }

// type Resizeable = {
//     resize: () => void;
// }

// type UIWidget = Draggable & Resizeable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {},
// }

//literal type (exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch';

//Nullable type
// function greet(name:string | null | undefined){
//     if (name)
//         console.log(name.toUpperCase());
//     else
//         console.log("Hola!");
// }

// greet(null);

type Customer = {
    birthday:Date;
}

function getCustomer(id:number): Customer | null | undefined {
    return id===0 ? null : {birthday: new Date()};
}

let customer = getCustomer(1);
// if(customer !== null && customer !== undefined)
//     console.log(customer.birthday);

//Optional property access operator
console.log(customer?.birthday?.getFullYear());

//optional element access operator
//customers?.[0];

//Optional call
let log: any = null;
log?.("a");

// type User={
//     name:string;
//     age:number;
// }

interface IUser {
    name:string;
    age?:number;
    getMessage():string;
}

const user:IUser = {
    name:"Monster",
    age:30,
    getMessage() {
        return `Hello ${this.name}`
    },
};

const user2:IUser = {
    name:"Minion",
    getMessage() {
        return `Hello ${this.name}`
    },
}