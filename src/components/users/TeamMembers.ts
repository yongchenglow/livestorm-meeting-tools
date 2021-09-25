import { Users } from '@livestorm/plugin';

export async function TeamMembers() {
  const teamMembers = await Users.me();
  return teamMembers;
}
