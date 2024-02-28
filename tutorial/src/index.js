// type Draggable = {
//     drag: () => void;
// }
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(1);
// if(customer !== null && customer !== undefined)
//     console.log(customer.birthday);
//Optional property access operator
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//optional element access operator
//customers?.[0];
//Optional call
var log = null;
log === null || log === void 0 ? void 0 : log("a");
var user = {
    name: "Monster",
    age: 30,
    getMessage: function () {
        return "Hello ".concat(this.name);
    },
};
var user2 = {
    name: "Minion",
    getMessage: function () {
        return "Hello ".concat(this.name);
    },
};
var user1 = {
    id: "1",
    name: "Alex",
    surname: "S",
    email: "a@a.com",
    permissions: ["read", "write"],
    getPermission: function (id) {
        return (typeof id === "string" ? id : [id]);
    }
};
var username = "Alexandra";
var pageName = "1";
//you can create class to implement interface or type in typescript
//for example like this
//interface User {
//     name: string;
//     surname: string;
//     email: string;
// }
// class User implements User {
//     name: "Gru";
//     surname: "G";
//      email: "g@g.com";
// }
//we could use type as clarity of our code, which is called aliases or union like:
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null;
// const popularTag: PopularTag[] = ["dragon", "coffee", "pizza"];
// const dragonsTag: MaybePopularTag = null;
//never will never return anything, it will throw an error a function returning never cannot have a reachable end point
//the way we fix it is by throwing never
// const doSomething = (): never => {
//     throw "never";
// }
//type unknown is not assignable to type string but any can be
// let vAny: any = 10;
// let vUnknown: unknown = 10;
// let s1:string = vAny;
// how to convert or type assertion to string
// let s2:string = vUnknown as string; 
//double assertion
// let pageNumber: string = "1";
// let numericPageNumber: number = (pageNumber as unknown) as number;
//working with DOM, if we don't specify it as HTMLInputElement, it will show as Element, it doesn't know if it's input
// const someElement = document.querySelector(".foo") as HTMLInputElement;
//below is incorrect, by specifying someElement as HTMLInputElement, we can delete "as any"
// console.log("someElement", (someElement as any).value);
// console.log("someElement", someElement.value); //this is the correct way
//if we add listener, without the HTMLInputElement, it will show event as a generic
// const someElement = document.querySelector(".foo");
// someElement.addEventListener("blur", (event) => {
//     const target = event.target as HTMLInputElement;
//     console.log("event", target.value);
// });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullname = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person("Amanda", "S");
console.log(person.getFullname());
