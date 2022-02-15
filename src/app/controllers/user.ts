import { Request, Response } from 'express';
import out from '@lib/apiout';
import { handlePromise as $ } from '@lib/utils';
import * as userService from '@root/app/services/user';

export async function insertUser(req: Request, res: Response) {
  const [err, result] = await $(userService.insertUser(req.body.name));
  if (err) return out.error(res, out.INTERNALERR, err.message);
  return out.success(res, out.SUCCESS, result);
}
