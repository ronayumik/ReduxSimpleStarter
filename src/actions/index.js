import { FETCH_USERS } from '../actions/types';

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Jane' },
      { name: 'Alex' },
      { name: 'Jim' }
    ]
  };
}
