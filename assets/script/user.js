export class User {
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get userName() {
        return this.#userName;
    }

    get email() {
        return this.#email;
    }

    getInfo() {
        return `
            <p><strong>ID:</strong> ${this.#id}</p>
            <p><strong>Name:</strong> ${this.#name}</p>
            <p><strong>Username:</strong> ${this.#userName}</p>
            <p><strong>Email:</strong> ${this.#email}</p>
        `;
    }
}