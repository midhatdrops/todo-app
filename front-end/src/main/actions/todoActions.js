import axios from 'axios';
const URL = 'http://localhost:3003/api/todos';

export const changeDescription = (event) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value,
});

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`);
  return {
    type: 'TODO_SEARCH',
    payload: request,
  };
};

// export const add = (description) => {
//   const request = axios.post(URL, { description });
//   return [
//     {
//       type: 'ADD_TODO',
//       payload: request,
//     },
//     search(),
//   ];
// };

export const add = (description) => {
  return (dispatch) => {
    axios
      .post(URL, { description })
      .then((resp) => dispatch({ type: 'ADD_TODO', payload: resp.data }))
      .then((resp) => dispatch(search()));
  };
};
