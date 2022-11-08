import { ILogger } from "./logger.contract";


export class ApiLoggerService implements ILogger{

    constructor() {
        console.log("ApiLoggerService constructor");
    }

    write(msg:string){
        console.log("ApiLoggerService Logging,,,,,,",msg);
    }
}