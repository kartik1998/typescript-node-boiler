import User from '@app/models/user';

function insert(userData: { name: string; date: Date }) {
  const user = new User(userData);
  return user.save();
}

export { insert };
