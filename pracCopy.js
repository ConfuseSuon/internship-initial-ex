let product = {
  name: "Jeans",
  price: 10,
  images: [
    "a.png",
    "b.png",
    { item: "test" },
    ["a", "b"],
    [{ anotherItem: "ok" }],
  ],
  attributes: {
    color: "Red",
    size: "Medium",
    extraOptions: {
      isDeliveryFree: true,
      isFeaturedProduct: true,
    },
  },
  getFriendlyName: function () {
    console.log("print this");
  },
};

const deepCopyFunction = (inObject) => {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    console.log(inObject);
    return inObject; // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value);
  }

  return outObject;
};
console.log(deepCopyFunction(product));
