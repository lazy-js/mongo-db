import mongoose from 'mongoose';
import { EventEmitter } from 'events';
export declare class Database extends EventEmitter {
    private url;
    constructor(url: string);
    connect(): Promise<this>;
    disconnect(): Promise<this>;
    getConnection(): mongoose.Connection;
    dropDatabase(): Promise<this>;
}
//# sourceMappingURL=index.d.ts.map