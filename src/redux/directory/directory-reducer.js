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
      linkUrl: "shop/veganproducts",
    },
    {
      title: "Plants seeds",
      imageUrl: "https://i.ibb.co/QbJvCvj/Plants-seeds.jpg",
      id: 3,
      linkUrl: "shop/sproutedseeds",
    },
    {
      title: "Vegan cosmetics",
      imageUrl: "https://i.ibb.co/pjNDSg8/Vegan-cosmetics.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/vegancosmetics",
    },
    {
      title: "Eco accessories",
      imageUrl: "https://i.ibb.co/FHSr0TL/Eco-accessories.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/ecocessories",
    },
  ],
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
