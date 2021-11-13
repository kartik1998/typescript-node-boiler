import { Request, Response } from 'express';
import out from '@lib/apiout';
import * as userService from '@root/app/services/user';

export function insertUser(req: Request, res: Response) {
  const result = userService.insertUser(req.body.name);
  return out.success(res, out.SUCCESS, result);
}
