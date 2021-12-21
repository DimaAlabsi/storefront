let initialState = {
  categories: [
    {
      normalizedName: "FOOD",
      displayName: "FOOD",
      description: "you can find many types of the  food you want",
    },
    {
      normalizedName: "jewelery",
      displayName: "jewelery",
      description: "this is a collection of unique jewelery",
    },
   { normalizedName: "women's clothing",
      displayName: "women's clothing",
      description: "clothes",
    },
    { normalizedName: "electronics",
      displayName: "electronics",
      description: "electronics",
    },
  ],

  activeCategory: "",
};

const ReduceCategory = (state = initialState, action) => {
  let { type, payload } = action;
  console.log(action);
  switch (type) {
    case "ACTIVE":
      let active = state.categories.filter(item => {
        return payload === item.normalizedName ? item.normalizedName : ""
      })

      let activeCategory = {
        normalizedName: active[0].normalizedName,
        displayName: active[0].displayName,
        description: active[0].description
      };

      let categories = state.categories;

      return { activeCategory, categories };
    default:
      return state;
  }
};


export const selectCate = (name) => {
  return {
    type: "ACTIVE",
    payload: name,
  };
};




export default ReduceCategory