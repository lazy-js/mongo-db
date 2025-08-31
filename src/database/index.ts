import mongoose from 'mongoose';
import { EventEmitter } from 'events';

export class Database extends EventEmitter {
  private url: string;
  constructor(url: string) {
    super();
    this.url = url;
  }

  async connect() {
    await mongoose.connect(this.url);
    this.emit('connected');
    return this;
  }

  async disconnect() {
    await mongoose.connection.close();
    await mongoose.disconnect();
    this.emit('disconnected');
    return this;
  }

  getConnection() {
    return mongoose.connection;
  }

  async dropDatabase() {
    await mongoose.connection.dropDatabase();
    return this;
  }
}
