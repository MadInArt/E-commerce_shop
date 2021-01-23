const INITIAL_STATE = {
  sections: [
    {
      title: "Superfoods",
      imageUrl: "https://i.ibb.co/N39sSCR/Superfoods.webp",
      id: 1,
      linkUrl: "shop/superfoods",
    },
    {
      title: "Products",
      imageUrl: "https://i.ibb.co/brZC7dh/Vegan-products.webp",
      id: 2,
      linkUrl: "shop/products",
    },
    {
      title: "Seeds",
      imageUrl: "https://i.ibb.co/vw2cRTx/Plants-seeds.webp",
      id: 3,
      linkUrl: "shop/seeds",
    },
    {
      title: "Cosmetics",
      imageUrl: "https://i.ibb.co/ZdCDKBc/Vegan-cosmetics.webp",
      size: "large",
      id: 4,
      linkUrl: "shop/cosmetics",
    },
    {
      title: "Accessories",
      imageUrl: "https://i.ibb.co/zx8FTbr/Eco-accessories.webp",
      size: "large",
      id: 5,
      linkUrl: "shop/accessories",
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
