import { GET_BLOG_POST,GET_HERO_SECTION } from "./types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_BLOG_POST:
      return {
        ...state,
        activePost: action.payload,
      };

    case GET_HERO_SECTION:
      return {
        ...state,
        heroSection: action.payload,
      };
    default:
      return state;
  }
};
