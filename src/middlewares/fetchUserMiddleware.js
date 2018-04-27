export default function({ dispatch }) {
  return next => action => {
    // only care if it is a promise

    // having .then means it is a promise
    // having a payload means it is indeed an action
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // Make sure action promise resolves
    action.payload
    .then( response =>
        // Create new action with same action, but different payload
        dispatch({ ...action, payload: response })
    );
  };
}
