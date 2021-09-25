import { Users } from '@livestorm/plugin';

export async function AllParticipants() {
  const participants = await Users.everyone();
  return participants;
}
