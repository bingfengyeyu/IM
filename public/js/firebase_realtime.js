import {App} from './Firebase/App.js'
import {Database} from './Firebase/Database'

const app = await App.init();
const database = new Database;
 

const onChange = (data) =>{
    console.log(data);
}

database.listen('yuki',onChange);

database.insert('text','aaaaa');