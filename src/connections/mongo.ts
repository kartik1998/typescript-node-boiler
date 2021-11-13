import mongoose from 'mongoose';
import nconf from 'nconf';

const { MONGO_URI } = nconf.get();
export async function connect(options: any) {
  const opts = options || {
    keepAlive: true,
    connectTimeoutMS: 30000,
    // user: env.MONGO_USER,
    // pass: env.MONGO_PASS,
  };
  mongoose.connect(MONGO_URI, opts);
  mongoose.set('debug', true);
  const conn = mongoose.connection;
  conn.once('open', () => console.log('connected'));
  conn.once('error', (err) => console.log('error', err));
}
