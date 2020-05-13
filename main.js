console.log('this works')

const customerReviews = [
  {
    name: "Jane Austen",
    rating: 1,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Valhalla"
  },
  {
    name: "Charles Dickens",
    rating: 2,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Not Pants"
  },
  {
    name: "Ernest Hemingway",
    rating: 3,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Kingdom Hearts"
  },
  {
    name: "Mark Twain",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Aesir"
  },
  {
    name: "George Orwell",
    rating: 4,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Leg Sleeves"
  },
  {
    name: "Samuel Beckett",
    rating: 4,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "White Lung"
  },
  {
    name: "Oscar Wilde",
    rating: 3,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "TransAtlantic"
  },
  {
    name: "Virginia Woolf",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Plague Doctor"
  },
  {
    name: "Leo Tolstoy",
    rating: 2,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Ragnorok"
  },
  {
    name: "John Steinbeck",
    rating: 3,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec.",
    model: "Bum Crack Insecurities"
  },
]

const printToDom = (selector,textToPrint) => {
  const selectedDiv = document.querySelector(`#${selector}`);
  selectedDiv.innerHTML = textToPrint
}

const reviewCardBuilder = (arr) => {
  let domString = "";
  let reviewImg = "";
  
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < pants.length; j++) {
  //     if (arr[i].model === pants[j].model) {
  //       reviewIMG += pants[j].imgSource
  //     }
      
  //   }
    
  // };


  for (let i = 0; i < arr.length; i++) {
    
    domString += `
    <div class="card filterDiv${arr[i].style} filterDiv${arr[i].rating}">
      <img class="card-img-top" src="${reviewImg}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${arr[i].name}</h5>
        <h6>Rating: ${arr[i].rating} out of 5</h6>
        <p class="card-text">${arr[i].review}</p>
        
      </div>
    </div>
    `
    
  }
  printToDom('reviews',domString)
}


const init = () => {
  reviewCardBuilder(customerReviews)
}

init ();
