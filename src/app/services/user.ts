import User from '@root/app/models/user';

export async function insertUser(name: string) {
  const user = new User({ name, date: new Date() });
  const result = await user.save();
  return result;
}
