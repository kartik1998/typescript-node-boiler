import * as UserRepo from '@app/repositories/user';

export async function insertUser(name: string) {
  const user = { name, date: new Date() };
  const result = await UserRepo.insert(user);
  return result;
}
