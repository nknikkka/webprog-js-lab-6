function isEnoughCapacity(products, containerSize) {
   
    let totalProducts = 0;
    for (let key in products) {
        totalProducts += products[key];
    }
    return totalProducts <= containerSize;
}

alert("Result 1: " + isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
alert("Result 2: " + isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
alert("Result 3: " + isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
alert("Result 4: " + isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false