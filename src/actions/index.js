import { FETCH_USERS } from '../actions/types';
import axios from 'axios';

export function fetchUsers() {
  /*const request = axios.get(
      'http://jsonplaceholder.typicode.com/users'
  );*/

  const request = {
    data : [
      {
        name: 'Rona',
        company: { name : 'Coba saja'},
        website: 'AAA'
      }
    ]
  };


  return {
    type: FETCH_USERS,
    payload: request
  };
}
