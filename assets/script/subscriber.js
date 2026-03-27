'use strict';
import { User } from './user.js';

export class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() {
        return this.#pages;
    }

    get groups() {
        return this.#groups;
    }

    get canMonetize() {
        return this.#canMonetize;
    }

    getInfo() {
        return `
            <img src="./assets/media/jaspreet-image.jpeg" alt="Profile picture" class="modal-profile">
            ${super.getInfo()}
            <p><strong>Pages:</strong> ${this.#pages.join(', ')}</p>
            <p><strong>Groups:</strong> ${this.#groups.join(', ')}</p>
            <p><strong>Can Monetize:</strong> ${this.#canMonetize ? 'Yes' : 'No'}</p>
        `;
    }
} 