import {RowDataPacket} from "mysql2";

export default interface Interns extends RowDataPacket{
    Intern_ID?: number,
    First_Name?: string,
    Last_Name?: string,
    Address?: string,
    University?: string

}