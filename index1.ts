// interface declaration
// You can then declare that a JavaScript object conforms to the shape of
// your new interface by using syntax like : TypeName after a variable declaration:


interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};

// interface declaration with class
interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount("Murphy", 1);

// You can use interfaces to annotate parameters and return values to functions:
function getAdminUser(): User {
    //...
}

function deleteUser(user: User) {
    // ...
}