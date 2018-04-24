import {
  CHANGE_AUTH
} from './types';

const authenticate = (isLoggedIn) => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn
});

export {
  authenticate
};