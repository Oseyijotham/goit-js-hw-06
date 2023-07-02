/*Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5*/


//Linking the variable SWContainer to an already existing element in the DOM tree (<ul id="categories">).
const SWContainer = document.querySelector('#categories');
// Creating a new element (<p></p>) and linking it to the variable numberOfCategories
const numberOfCategories = document.createElement('p');
// Creating a new element (<b></b) and linking it to the variable thick
const thick = document.createElement('b');


//numberOfCategories.innerHTML = `<b>Hello</b>` /*optional*/


//Adding the created (<b></b>) tag to (<p></p>) tag
numberOfCategories.append(thick)

/*Adding the created (<p></p>) tag to the (<ul id="categories">) that already exists in the DOM tree,
  so that the created (<p></p>) tag will be displayed on the page*/
SWContainer.after(numberOfCategories);

//Creating a variable "totalCategories" and equating it to the number of .item classes in the document object
const totalCategories = document.querySelectorAll(".item").length;//[1]
//Making the textContent of the (<b></b>) tag equal to Number of categories: 3
thick.textContent = `Number of Categories: ${totalCategories} cm`;
//Displaying it in the Console
console.log(thick.textContent);

//Creating a new element (<ul></ul>) and linking it to the variable "firstCategoryList"
const firstCategoryList = document.createElement('ul');
numberOfCategories.after(firstCategoryList)

// Creating a new element (<li></li>) and linking it to the variable "firstCategory"
const firstCategory = document.createElement('li');
//Adding the created (<li></li>) tag "firstCategory" to (<ul></ul>) tag "firstCategoryList"
firstCategoryList.append(firstCategory);
const firstCategoryParent = document.querySelector(".item")
const firstCategoryElement = firstCategoryParent.querySelector('h2');
const firstCategoryValue = firstCategoryElement.textContent
firstCategory.textContent = `Category: ${firstCategoryValue}`
console.log(firstCategory.textContent)
// Creating another (<li></li>) and linking it to the variable firstElements
const firstElements = document.createElement('li')
//Adding the created (<li></li>) tag "firstElements" to (<ul></ul>) tag "firstCategoryList"
firstCategoryList.append(firstElements);
const totalFirstCategoryElements = `Elements: ${firstCategoryParent.querySelectorAll("li").length}`
firstElements.textContent = totalFirstCategoryElements 
console.log(firstElements.textContent);

//Creating a new element (<ul></ul>) and linking it to the variable "secondCategoryList"
const secondCategoryList = document.createElement('ul');
firstCategoryList.after(secondCategoryList);

// Creating a new element (<li></li>) and linking it to the variable "secondCategory"
const secondCategory = document.createElement('li');
//Adding the created (<li></li>) tag "secondCategory" to (<ul></ul>) tag "secondCategoryList"
secondCategoryList.append(secondCategory);
const secondCategoryParent = document.querySelectorAll(".item")[1];
const secondCategoryElement = secondCategoryParent.querySelector('h2');
const secondCategoryValue = secondCategoryElement.textContent
secondCategory.textContent = `Category: ${secondCategoryValue}`
console.log(secondCategory.textContent)

// Creating another (<li></li>) and linking it to the variable secondElements
const secondElements = document.createElement('li')
//Adding the created (<li></li>) tag "secondElements" to (<ul></ul>) tag "secondCategoryList"
secondCategoryList.append(secondElements);
const totalSecondCategoryElements = `Elements: ${secondCategoryParent.querySelectorAll("li").length}`
secondElements.textContent = totalSecondCategoryElements 
console.log(secondElements.textContent);

//Creating a new element (<ul></ul>) and linking it to the variable "thirdCategoryList"
const thirdCategoryList = document.createElement('ul');
secondCategoryList.after(thirdCategoryList);

// Creating a new element (<li></li>) and linking it to the variable "thirdCategory"
const thirdCategory = document.createElement('li');
//Adding the created (<li></li>) tag "thirdCategory" to (<ul></ul>) tag "thirdCategoryList"
thirdCategoryList.append(thirdCategory);
const thirdCategoryParent = document.querySelectorAll(".item")[2];
const thirdCategoryElement = thirdCategoryParent.querySelector('h2');
const thirdCategoryValue = thirdCategoryElement.textContent
thirdCategory.textContent = `Category: ${thirdCategoryValue}`
console.log(thirdCategory.textContent)

// Creating another (<li></li>) and linking it to the variable thirdCategory
const thirdElements = document.createElement('li')
//Adding the created (<li></li>) tag "thirdElements" to (<ul></ul>) tag "thirdCategoryList"
thirdCategoryList.append(thirdElements);
const totalthirdCategoryElements = `Elements: ${thirdCategoryParent.querySelectorAll("li").length}`
thirdElements.textContent = totalthirdCategoryElements 
console.log(thirdElements.textContent);