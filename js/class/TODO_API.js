import { TODO } from "./TODO.js";

class TODO_API {
    static async update(uid, data = []) {
        console.log(uid,data);
        let api=`https://book.niceinfos.com/frontend/api/`;

        let params={
            action:'todo',
            uid:uid,
            data:data
        }
        let option ={
            method:'POST',
            body:JSON.stringify(params)
        }

        let response=await fetch(api,option)
        let json = await response.json()
        return json.data;
    }

    static async get(uid) {
        let api = `https://book.niceinfos.com/frontend/api/?action=todo&uid=${uid}`
        let response = await fetch(api);
        let json = await response.json();
        return json.data;

        // fetch(api).then(response => {
        //     return response.json()
        // }).then(json => {
        //     return json;
        // })

    }
}

export { TODO_API }