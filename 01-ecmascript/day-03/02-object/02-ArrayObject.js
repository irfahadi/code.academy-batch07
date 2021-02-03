const product = [
  {
    id: 1,
    names: "Laptop Dell",
    price: 1500.00,
    variant: {
      type: "gamer",
      core: "i7 Core",
    },
  },
  {
    id: 2,
    names: "Laptop Asus",
    price: 500.00,
    variant: {
      type: "office",
      core: "i7 Core",
    },
  },
];

const filterProductByPrice = (product,price) => product.filter(x=> x.price === price)

console.log(filterProductByPrice(product,1500.00))