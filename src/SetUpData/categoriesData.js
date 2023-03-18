const categories = [
  {
    id: 1,
    title: "Phones & Accessories",
    isOpen: true,
    subList: [],
  },
  {
    id: 2,
    title: "Health & Beauty",

    subList: [
      { subCategory: "Hair wigs" },
      { subCategory: "Nails" },
      { subCategory: "Cosmetics" },
      { subCategory: "Supplements" },
    ],
  },
  {
    id: 3,
    title: "Home & Office",
    isOpen: true,
    subList: [{ subCategory: "Decors" }],
  },
  {
    id: 4,
    title: "Fashion",

    subList: [
      { subCategory: "African wears" },
      { subCategory: "Dinner wear" },
      { subCategory: "Executives" },
      { subCategory: "Party wears" },
      { subCategory: "Random" },
    ],
  },
  {
    id: 5,
    title: "Gaming",

    subList: [{ subCategory: "Action game" }, { subCategory: "Arcade games" }],
  },
  {
    id: 6,
    title: "Other categories",

    subList: [],
  },
];

export default categories;
