console.log(data);

// Instructions
// - Use this template as a starting point (it won't work properly on Codesandbox, you have to download it to your laptop) => https://codesandbox.io/s/proud-dog-owners-app-template-g30wz?from-embed
// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

// WRITE YOUR CODE BELOW!

const dogListEl = document.querySelector(".dogs-list")
const mainSectionEl =  document.querySelector(".main__dog-section")

function renderDogsList(dogs) {
  for (let i = 0; i < dogs.length; i++) {
    const dog = dogs[i]
    const name = dog.name

    const listEl = document.createElement("li")

    listEl.className = "dogs-list__button"

    listEl.innerText = name

    //Add Even Listener To Each List
    listEl.addEventListener("click", () => {
      console.log("OnClick inside renderDogsList: ", dog)
  
    renderMainCard(dog)
  })

    dogListEl.append(listEl)
  }
}

renderDogsList(data)


function renderMainCard(dog) {
mainSectionEl.innerHTML = ""

const h2El = document.createElement("h2")
 h2El.innerText = dog.name
 mainSectionEl.append(h2El)

 const imageEl = document.createElement("img")
 imageEl.setAttribute("height", 300)
 imageEl.setAttribute("width", 400)
    const imageSrc = dog.image
    imageEl.src = imageSrc
    mainSectionEl.append(imageEl)
}



// function createCardElement(dog) {
  
//     const sectionEl = document.querySelector("section");
//     sectionEl.className = "main__dog-section";
//     mainEl.append(sectionEl);

//     const h2El = document.querySelector("h2");
//     h2El.innerText = dog.name;

//     const imageEl = document.createElement("img");
//     const imageSrc = dog.image;
//     // console.log("Dogs Images: ", image);
//     imageEl.setAttribute("src", imageSrc);
//     sectionEl.append(imageEl);

//     const divEl = document.createElement("div");
//     divEl.className = "main__dog-section__desc";
//     sectionEl.append(divEl);

//     const h3El = document.createElement("h3");
//     h3El.innerText = "Bio";
//     divEl.append(h3El);

//     const pEl = document.createElement("p");
//     const bio = dog.bio;
//     pEl.innerText = bio;
//     divEl.append(pEl);

//     const divTwoEl = document.createElement("div")
//     divTwoEl.className = "main__dog-section__btn"
//     sectionEl.append(divTwoEl)
// const pTwoEl = document.createElement("p")
// divTwoEl.append(pTwoEl)
// const emEl = document.createElement("em")
// pTwoEl.append(emEl)
// emEl.innerText = "Is Naughty?"
//     const buttonEl = document.createElement("button")
//     divTwoEl.append(buttonEl)
//     let isGoodDog = ""
//     const dogBehaviour = dog.isGoodDog
//     if (dogBehaviour){
//       dogBehaviour = "Good Dog"
//     } else {
//       dogBehaviour = "Bad Dog"
//     }
//     const row = `${dogBehaviour}\n`
//     isGoodDog = dogBehaviour
//     buttonEl.innerText = isGoodDog
    
//   return sectionEl
// }
// const dogsOnlineCard = createCardElement(data[0]);
// console.log("Inside Card Online: ", dogsOnlineCard);
// for (let i = 0; i < data.length; i++) {
//     const dogs = data[i];
//     // console.log("Inside Dogs Data: ", dogs);

//     const createCard = createCardElement(data)
//     sectionEl.append(createCard)
// }
