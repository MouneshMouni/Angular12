//prototype for Authentication

export class AuthInfo {
    userId: string;
    password: string;
    constructor(userId: string, password: string) {
        this.userId = userId;
        this.password = password;
    }
}

export class UserInfo {
    userId: string = "";
    role: string = "";
}

export class OrdersInfo {
    id: number = 0;
    customerId: number = 0;
    productName: String = "";
    quantity: number = 0;
    unitPrice: number = 0;
    lineTotal: number = 0;
}