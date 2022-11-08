import { ILogger } from "./logger.contract";


export class ConsoleLoggerService implements ILogger{
    constructor() {
        console.log("ConsoleLoggerService constructor");
    }
    write(msg:string){
        console.log(msg);
    }
}