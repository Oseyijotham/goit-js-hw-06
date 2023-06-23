const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const containerList = document.querySelector('.gallery');

images.map(image => {
  
  const list = document.createElement('li');
  
  //list.setAttribute('class', 'item');

  
  list.innerHTML = `<img src= ${image.url} width="370" height="294"
                            alt= ${image.alt}>`

 containerList.insertAdjacentHTML("beforeend", list.innerHTML);
  
containerList.style.display = "grid";
containerList.style.gridTemplateColumns = "1fr 1fr 1fr";
  containerList.style.gridGap = "30px";
  containerList.style.listStyle =  "none";
  


 

  
  
});


console.log(containerList.textContent);