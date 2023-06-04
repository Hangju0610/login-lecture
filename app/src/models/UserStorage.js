"use strict";

// Promise = 약속, 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에 비동기 처리에 아주 효과적이다.
const db = require("../config/db");

class UserStorage {
    //Promise를 직접 제작한다. (Mysql에서는 지원 안하나봄.)
    //시간이 오래 걸리는 구문에 써준다.
    //resolve = 내부 함수가 성공했을 경우 반환
    //reject = 내부 함수가 실패했을 경우 반환
    static getUserInfo(id){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE ID = ?;";
            db.query(query, [id],(err,data) =>{
                if(err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users (id, name, password) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.password],(err) =>{
                if(err) reject(`${err}`);
                else resolve({ success : true});
            });
        });
    }
}

module.exports = UserStorage;