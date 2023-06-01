"use strict";

// Promise = 약속, 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기 처리에 아주 효과적이다.
const fs = require("fs").promises;


class UserStorage {
    static #getUserInfo (data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }

    static getUsers(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        // Promise를 반환하기 때문에 .then() 으로도 접근하여 데이터를 가져올 수 있습니다.
        // 그러나 User.js에 await을 넣어줘야 한다. 비동기적으로 처리하기 때문에 이 fs에서 명단을 읽어올때까지 기다려야 하기 때문이다.
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);

        })
        .catch(console.error);
    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { success : true };

    }
}

module.exports = UserStorage;