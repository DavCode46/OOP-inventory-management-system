

export const saveToLocalStorage = (data) => {
  const storedData = JSON.stringify(data);
  localStorage.setItem('productManagerData', storedData);
};

export const loadFromLocalStorage = () => {
  const data = localStorage.getItem('productManagerData');
  return data ? JSON.parse(data) : [];
};
