"use strict";

const UserStorage = require("./UserStorage")

class User {
    constructor(body) { // 이게 뭘까?? home.ctrl.js const user = new User(req.body) 에서 받아온 바디(id, 비밀번호)이다. 이걸 들고 다니면서 login에다가 넣어준다.
        this.body = body;
    }

    login() {
        const body = this.body;
        const {id, password}= UserStorage.getUserInfo(body.id);
        
        if (id) {
            if (id === body.id && password === body.password) {
                return { success : true};
            }
            return {success : false, msg : "비밀번호가 틀렸습니다."};
        }
        return { success : false, msg : "존재하지 않는 아이디입니다."};
    }
}


module.exports = User