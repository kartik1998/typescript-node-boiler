import * as mongo from './mongo';

export class Connections {
  private static _instance: Connections;
  public static mongoConn: any;
  private constructor() {} // eslint-disable-line @typescript-eslint/no-empty-function

  static async init(options?: any) {
    Connections.mongoConn = await mongo.connect(options);
    return this._instance || (this._instance = new Connections());
  }

  static getConnections(): any {
    return { mongoConn: Connections.mongoConn };
  }
}
