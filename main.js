console.log('this works')
//pants array created with some dummy placeholder data for now
const pantsArray = [
  {
    model: "Ragnarok",
    sizes: ["Thicc", "Chonky", "Absolute Unit"],
    style: "Viking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://bit.ly/35VVjin",
    price: 59.99,
    id: 0,
  },
  {
    model: "Aesir",
    sizes: ["Chonky", "Absolute Unit", "Big Chungus"],
    style: "Viking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://bit.ly/2YWBLJa",
    price: 249.99,
    id: 1,
  },
  {
    model: "Valhalla",
    sizes: ["Thicc", "Chonky", "Absolute Unit", "Big Chungus"],
    style: "Viking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://cdn.shopify.com/s/files/1/0234/5963/products/10_04_NFL_Pants_9575-Edit.jpg?v=1570221066",
    price: 79.99,
    id: 2,
  },
  {
    model: "Plague Doctor",
    sizes: ["Absolute Unit", "Big Chungus"],
    style: "18th Century",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://bit.ly/2WnBj4X",
    price: 119.99,
    id: 3,
  },
  {
    model: "TransAtlantic",
    sizes: ["Thicc", "Chonky", "Absolute Unit"],
    style: "18th Century",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://bit.ly/35Oe5Z0",
    price: 499.99,
    id: 4,
  },
  {
    model: "White Lung",
    sizes: ["Thicc", "Chonky", "Absolute Unit"],
    style: "18th Century",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://bit.ly/35RlUgp",
    price: 79.99,
    id: 5,
  },
  {
    model: "Maui from Moana",
    sizes: ["Chonky", "Absolute Unit", "Big Chungus"],
    style: "Cosplay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://i.ebayimg.com/images/g/~HEAAOSw62VZzauf/s-l1600.jpg",
    price: 84.99,
    id: 6,
  },
  {
    model: "Sora from Kingdom Hearts",
    sizes: ["Thicc", "Chonky", "Absolute Unit", "Big Chungus"],
    style: "Cosplay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://flic.kr/p/fnCNfU",
    price: 299.99,
    id: 7,
  },
  {
    model: "Impa from The Legend of Zelda",
    sizes: ["Thicc", "Chonky", "Absolute Unit", "Big Chungus"],
    style: "Cosplay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgUrl: "https://bit.ly/3fBUwHX",
    price: 274.99,
    id: 8,
  },
  {
    model: "Leg Sleeves",
    sizes: ["Absolute Unit", "Big Chungus"],
    style: "Absurd",
    description: "Are they shoes or pants? Does it matter? Speed up your morning routine with these stylish leg sleeves and never worry about whether or not your shoes match your pants. Not recommended for those with arthritic fingers.",
    imgUrl: "http://glamazonsblog.com/wp-content/uploads/willow-smith-converse-sneaker-pants-glamazons-blog.jpg",
    price: 64.99,
    id: 9,
  },
  {
    model: "Not Pants",
    sizes: ["Thicc", "Chonky", "Absolute Unit", "Big Chungus"],
    style: "Absurd",
    description: "Every pair of our most unique offering is hand-crocheted with love by sweet grandmas. Show off your shins with style. These trousers are breezy and comfortable. They're suited to keep up with you and your active lifestyle.",
    imgUrl: "https://sadanduseless.b-cdn.net/wp-content/uploads/2018/10/crochet-pants5.jpg",
    price: 449.99,
    id: 10,
  },
  {
    model: "Bum Crack Insecurities",
    sizes: ["Thicc", "Chonky", "Absolute Unit"],
    style: "Absurd",
    description: "Worried about your pants falling down? Never again with these beauties! These pants take the high-waisted trend to the next level and put you ahead of the fashion curve. You'll turn heads everywhere you go!",
    imgUrl: "https://bit.ly/2AkBEgm",
    price: 99.99,
    id: 11,
  },
]



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

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const buildInventoryPage = (pantsArray) => {
  let domString = '<div class="card-deck">';

    for (let i=0; i<pantsArray.length; i++) {

    domString += `
      <div class="card">
        <img class="card-img-top" src="${pantsArray[i].imgUrl}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${pantsArray[i].style}: ${pantsArray[i].model}</h5>
          <p class="card-text">${pantsArray[i].description}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">$${pantsArray[i].price}</small>
        </div>
      </div>
    `;
    domString += '</div>'
  }

printToDom("inventory", domString)
}

const init = () => {
  buildInventoryPage(pantsArray)
}

init ();
