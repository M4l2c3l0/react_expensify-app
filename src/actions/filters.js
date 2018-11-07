// TEXT FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// AMOUNT FILTER
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// DATE FILTER
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// START DATE FILTER
export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

// END DATE FILTER
export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});