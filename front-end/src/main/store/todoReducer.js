const INITIAL_STATE = {
  description: 'ler Livro',
  list: [
    { _id: 1, description: 'Pagar fatura do cartão', done: true },
    { _id: 2, description: 'Ler Harry Potter', done: false },
    { _id: 3, description: 'Reunião com a equipe as 10h', done: false },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED': {
      return { ...state, description: action.payload };
    }
    default:
      return state;
  }
};
