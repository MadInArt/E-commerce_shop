const INITIAL_STATE = {
  sections: [
    {
      title: "Superfoods",
      imageUrl: "https://i.ibb.co/s5FVprF/Superfoods.jpg",
      id: 1,
      linkUrl: "shop/superfoods",
    },
    {
      title: "Vegan products",
      imageUrl: "https://i.ibb.co/7jsKsJ7/Vegan-products.jpg",
      id: 2,
      linkUrl: "shop/tanks",
    },
    {
      title: "Plants seeds",
      imageUrl: "https://i.ibb.co/QbJvCvj/Plants-seeds.jpg",
      id: 3,
      linkUrl: "shop/planes",
    },
    {
      title: "Vegan cosmetics",
      imageUrl: "https://i.ibb.co/pjNDSg8/Vegan-cosmetics.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/warships",
    },
    {
      title: "Eco accessories",
      imageUrl: "https://i.ibb.co/FHSr0TL/Eco-accessories.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/guns",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
