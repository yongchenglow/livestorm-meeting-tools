import { Users } from '@livestorm/plugin';

export async function Me() {
  const me = await Users.me();
  return me;
}
