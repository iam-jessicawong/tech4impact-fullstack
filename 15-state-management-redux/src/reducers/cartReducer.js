import Item1 from "../images/avocado.jpg";
import Item2 from "../images/carrot.jpg";
import Item3 from "../images/corn.jpg";
import Item4 from "../images/garlic.jpg";
import Item5 from "../images/red-chili.jpg";
import Item6 from "../images/tomato.jpg";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING
} from "../actions/action-types/cartActions";

import { produce } from "immer";

const initState = {
  items: [
    {
      id: 1,
      title: "Avocado",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1
    },
    {
      id: 2,
      title: "Carrot",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2
    },
    {
      id: 3,
      title: "Corn",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3
    },
    {
      id: 4,
      title: "Garlic",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4
    },
    {
      id: 5,
      title: "Red Chili",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5
    },
    {
      id: 6,
      title: "Tomato",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6
    }
  ],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    // Add code here
    // const id = action.payload;
    // const found = state.items.find((item) => item.id === id);
    // const copyFound = { ...found };

    // const addedItems = state.addedItems.map((item) => ({ ...item }));

    // addedItems.push(copyFound);

    // return {
    //   ...state,
    //   addedItems: addedItems
    // };

    // USING IMMER
    const nextState = produce(state, (draf) => {
      const id = action.payload;
      const found = state.items.find((item) => item.id === id);
      const addedIndex = state.addedItems.findIndex((item) => item.id === id);

      if (!!found) {
        if (addedIndex >= 0) {
          draf.addedItems[addedIndex].quantity += 1;
        } else {
          draf.addedItems.push({ ...found, quantity: 1 });
        }
      }

      // draf.total = draf.addedItems.reduce(
      //   (prevItem, currItem) => prevItem + currItem.quantity * currItem.price,
      //   0
      // );
      draf.total += found.price
    });

    return nextState;
  }

  if (action.type === REMOVE_ITEM) {
    // Add code here

    // USING IMMER
    const nextState = produce(state, (draf) => {
      const id = action.payload;
      const foundIndex = state.addedItems.findIndex((item) => item.id === id);

      draf.total -= draf.addedItems[foundIndex].quantity * draf.addedItems[foundIndex].price
      draf.addedItems.splice(foundIndex, 1);
    });

    return nextState;
  }

  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    // Add code here
    const nextState = produce(state, (draf) => {
      const id = action.payload;
      const foundIndex = state.addedItems.findIndex((item) => item.id === id);

      draf.addedItems[foundIndex].quantity += 1;
      
      draf.total += draf.addedItems[foundIndex].price
    });
    
    return nextState;
  }

  if (action.type === SUB_QUANTITY) {
    // Add code here
    const nextState = produce(state, (draf) => {
      const id = action.payload;
      const foundIndex = state.addedItems.findIndex((item) => item.id === id);
      const currDraft = draf.addedItems[foundIndex];
      
      draf.total -= draf.addedItems[foundIndex].price

      if (currDraft.quantity > 1) {
        currDraft.quantity -= 1;
      } else {
        draf.addedItems.splice(foundIndex, 1);
      }
    });
      
    return nextState;
  }

  if (action.type === ADD_SHIPPING) {
    // Add code here (OPTIONAL)
    const nextState = produce(state, (draft) => {
      // const fee = action.payload;
      // console.log(fee);

      // draft.total += action.payload;
      draft.total += 6
    });
    
    return nextState;
  }
  
  if (action.type === SUB_SHIPPING) {
    // Add code here (OPTIONAL)
    const nextState = produce(state, (draft) => {
      draft.total -= 6
    })

    return nextState
  } else {
    return state;
  }
};

export default cartReducer;
