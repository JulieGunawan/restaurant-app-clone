//this way of defining type is valid, but not for interface
type ID = string;

//interface is related to entity or object, if we write it like type, it won't work
// interface UserInterface{
//     id: ID;
//     name: string;
//     surname: string;
//     email: string;
//     getPermission():string;
// }

// interface Admin extends UserInterface {
//     permissions: string[];
//     below code won't work, as we will get an error types returned are incompatible
//     getPermission():string[] 
// }

type User = {
    id: ID;
    name: string;
    surname: string;
    email: string,
    getPermission: (id: string) => string;
}
type Admin = User & {
    permissions: string[];
    //using type, it can overwrite the User getPermission function, but if we define in interface, it won't work
    getPermission: (id: string[]) => string[];
}

const user1: Admin = {
    id: "1",
    name: "Alex",
    surname: "S",
    email: "a@a.com",
    permissions: ["read", "write"],
    getPermission(id: string[] | string) {
        return (typeof id === "string" ? id : [id]) as string[] & string;
    }
}
let username: string = "Alexandra";

let pageName: string | number = "1";