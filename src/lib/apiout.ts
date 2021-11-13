import StatusCodes from './status-codes';
import { Response } from 'express';

class Apiout extends StatusCodes {
  public success(res: Response, statusCode?: number, data?: any): Response {
    const out: any = {
      status: 'success',
      statusCode: statusCode || this.SUCCESS,
      result: data || null,
    };
    return res.status(statusCode || this.SUCCESS).json(out);
  }

  public error(res: Response, statusCode?: number, error?: string): Response {
    const out: any = {
      status: 'failure',
      statusCode: statusCode || this.INTERNALERR,
      error: error || 'internal server error',
    };
    return res.status(statusCode || this.INTERNALERR).json(out);
  }
}

const out = new Apiout();

export default out;
