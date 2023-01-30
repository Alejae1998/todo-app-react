import { checkError, client } from './client.js';

export async function getListItems() {
  const response = await client.from('todos').select();
  return checkError(response);
}
