const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const containerList = document.querySelector('#ingredients');

ingredients.map(ingredient => {
  
  const list = document.createElement('li');
  
  list.setAttribute('class', 'item');

  list.textContent = ingredient

  containerList.append(list);
  
});


console.log(containerList.textContent);