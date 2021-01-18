import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todo: () => ({
    description: 'ler Livro',
    list: [
      { _id: 1, description: 'Pagar fatura do cartão', done: true },
      { _id: 2, description: 'Ler Harry Potter', done: false },
      { _id: 3, description: 'Reunião com a equipe as 10h', done: false },
    ],
  }),
});

export default rootReducer;
