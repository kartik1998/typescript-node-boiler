import { Request, Response } from 'express';
import out from '@lib/apiout';
import * as userService from '@root/app/services/user';

export function getHelloWorld(req: Request, res: Response) {
  const result = userService.getHelloWorld();
  return out.success(res, out.SUCCESS, result);
}
