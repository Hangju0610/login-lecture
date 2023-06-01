"use strict";

const UserStorage = require("./UserStorage")

class User {
    constructor(body) { // 이게 뭘까?? home.ctrl.js const user = new User(req.body) 에서 받아온 바디(id, 비밀번호)이다. 이걸 들고 다니면서 login에다가 넣어준다.
        this.body = body;
    }

    async login() {
        const client = this.body;
        // await은 비동기 async 안에서만 사용이 가능하다!
        const {id, password} = await UserStorage.getUserInfo(client.id);
        
        if (id) {
            if (id === client.id && password === client.password) {
                return { success : true};
            }
            return {success : false, msg : "비밀번호가 틀렸습니다."};
        }
        return { success : false, msg : "존재하지 않는 아이디입니다."};
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch(err) {
            return { success : false, msg : err};
        }
    }
}


module.exports = User