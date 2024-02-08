import {RepoBase} from "../defenitions/repo-base";
import IInterns from "../defenitions/interfaces/intern";
import mysql, {OkPacket} from "mysql2";
import connection from '../db'


class InternRepository extends RepoBase<IInterns>{

    private connection: mysql.Connection | undefined
    constructor() {
        super();
        this.connection = connection
    }
    //save intern
    save(record: IInterns): Promise<number> {
        return new Promise((resolve,reject) => {
            try {
                const {First_Name,Last_Name,University,Address} = record
                const query = `INSERT INTO Interns(First_Name,Last_Name,Address,University) VALUES (?,?,?,?)`
                const queryParams = [First_Name,Last_Name,Address,University]

                //run the query
                this.connection?.query<OkPacket>(query,queryParams,(err,result) => {
                    if (err){
                        console.log('🔴 Error occurred: ',err)
                        reject(err)
                        return
                    }
                    resolve(result.affectedRows)
                })
            }catch (ex) {
                reject(ex)

            }
        })
    }

    // retrieveAll(searchParams?: { id?: number }): Promise<IInterns[]> {
    //     return Promise.resolve([]);
    // }
    //
    // retrieveById(id: number): Promise<IInterns | undefined> {
    //     return Promise.resolve(undefined);
    // }
    //
    // update(record: IInterns): Promise<number> {
    //     return Promise.resolve(0);
    // }
    //
    // delete(id: number): Promise<number> {
    //     return Promise.resolve(0);
    // }
    //
    // deleteAll(): Promise<number> {
    //     return Promise.resolve(0);
    // }

    //Retrieve intern
}

export const internRepository = new InternRepository()