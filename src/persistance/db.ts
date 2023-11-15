
import {AppDataSource} from "./config"
import {Users} from "./Users"

export class Db{
    constructor(){}
    static getAll(){
        return AppDataSource.manager.find(Users)
    }
}


