import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, name } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            name,
            favourite: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            favourite: !state.byIds[id].favourite
          }
        }
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      let data = {...state.byIds}
      delete data[id]
      return {
        ...state,
        allIds: [...state.allIds].filter(itm => itm !== id),
        byIds: {
          ...data
        }
      };
    }
    default:
      return state;
  }
}
