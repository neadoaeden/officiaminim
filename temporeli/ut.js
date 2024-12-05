function createItem(specs = {}) {
  const item = {
    color: 'color' in specs ? specs.color : defaultSpecifiers.color,
    size: 'size' in specs ? specs.size : defaultSpecifiers.size,
    quantity: 'quantity' in specs ? specs.quantity : defaultSpecifiers.quantity,
    price: 'price' in specs ? specs.price : defaultSpecifiers.price
  };

  return item;
}

// Example usage preserving falsy values
const newItem3 = createItem({ quantity: 0 });
console.log(newItem3);
// Output: { color: 'blue', size: 'medium', quantity: 0, price: 0 }
