export class Admin {
    id: number;
    name: string;
    password: string;
    token?: string;

    constructor(id: number, name: string, password: string, token: string) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.token = token;
    }

} 