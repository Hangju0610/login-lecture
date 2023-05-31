"use strict";

class UserStorage {
    static #users = { // #을 추가하여 은닉화 진행
        id : ["phj950610", "나개발", "김팀장"],
        password : ["1234", "1234", "123456"],
        name:["박형주", "나개발", "김팀장"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
         

    }
}

module.exports = UserStorage;