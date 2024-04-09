
const productList = [
  { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
  {
    id: "p2",
    name: "Oranges",
    category: "Fruits",
    price: 1.99,
    inStock: false
  },
  {
    id: "p3",
    name: "Blueberries",
    category: "Fruits",
    price: 4.99,
    inStock: true
  },
  {
    id: "p4",
    name: "Carrots",
    category: "Vegetables",
    price: 1.0,
    inStock: true
  },
  {
    id: "p5",
    name: "Tomatoes",
    category: "Vegetables",
    price: 1.5,
    inStock: true
  }
];

function searchAndBuyProduct(productList, productName){
  const product = productList.find((product) => product.name === productName);
  if (product) {

    if (product.inStock) {
      product.inStock = false;
      console.log(`Product '${product.name}' was successfully purchased for $${product.price}.`);
      return true;
    } else {
      console.log(`Sorry, product '${product.name}' is currently out of stock.`);
      return false;
    }
  } else {

    console.log(`Sorry, we do not have product named '${productName}' in our store.`);
    return false;
  }
};