export const BookInformation = {
  bookName: {
    type: "text",
    label: "Book Name",
    defaultValue: ""
  },
  bookAuthor: {
    type: "text",
    label: "Book Author",
    defaultValue: ""
  },
  bookCategory: {
    type: "select",
    label: "Category",
    defaultValue: "",
    options: [
      "Transfiguration",
      "Defence Against The Dark Arts",
      "Potions",
      "Herbology",
      "Charms",
      "Care Of Magical Creatures"
    ]
  },
  bookQuantity: {
    type: "number",
    label: "Quantity",
    defaultValue: 0
  }
};
