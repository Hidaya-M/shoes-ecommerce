const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".link-item");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".product-name");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const closeModal = document.getElementById("closeModal")
const showModal = document.getElementById("showModal")
const modalContainer = document.querySelector(".modal-container");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    item.style.color = "#369e62";
    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });

    // Remove the green color from all other link items
    menuItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.style.color = "lightgrey";
      }
    });
  });
});

// changing the img according to the choosen color
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});


//  chnage the style of size 
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    size.style.backgroundColor = "black";
    size.style.color = "white";

    currentProductSizes.forEach((otherItem) => {
      if (otherItem !== size) {
        otherItem.style.backgroundColor = "white";
        otherItem.style.color = "black";
      }
    });
  });
});



showModal.addEventListener("click", () => {
  modalContainer.style.display="block"
}
)
// closing the modal
closeModal.addEventListener("click", () => {
  modalContainer.style.display="none"
}
)

