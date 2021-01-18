export default changeDescription = (event) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value,
});
