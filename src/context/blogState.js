import { useReducer } from "react";
import blogReducer from "./blogReducer";
import BlogContext from "./blogContext";
import { GET_BLOG_POST, GET_HERO_SECTION} from "./types";

const BlogState = (props) => {
  const initalState = {
    blogPosts: [
      {
        _id: "1231515",
        handle: "post-1-blog-title",
        title: "Blog Title",
        subtitle: "Blog SubTitle or Slogan",
        date: new Date("December 17, 1998 03:24:00"),
        author: "Arda Kurt",
        category: "Technology",
        postNo: 1,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus placeat nemo quia dolorem amet architecto earum esse cum ad? Qui cum quo alias repudiandae distinctio nam impedit dignissimos aspernatur.
              Odio enim, alias, pariatur ex repudiandae quis maxime perferendis inventore hic, a laboriosam repellat praesentium provident libero tempora reprehenderit suscipit blanditiis illo nobis? Recusandae unde quisquam tempore, beatae cum perspiciatis?
              Doloremque veritatis eum molestias nemo harum temporibus libero, adipisci, provident doloribus soluta, vitae nam saepe similique ad a delectus ratione! Voluptatem, nobis ipsum. Animi, quaerat ducimus aperiam illo explicabo ipsa.
              Blanditiis nostrum voluptatem molestias rem mollitia! Modi laborum itaque porro repellendus. Velit sint ab nesciunt quae harum reiciendis, fugiat maiores natus omnis! Hic vel, doloremque ex nihil repudiandae dolorum perferendis.
              Totam similique eos alias iste est maiores, aliquid molestias. Facere quis quae magnam tempore, eaque necessitatibus! Libero, corrupti error, ad consectetur omnis, enim vero quod dolor adipisci eius in veniam.`,
        images: [
          "https://images.pexels.com/photos/8402390/pexels-photo-8402390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/8412193/pexels-photo-8412193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        _id: "1512235",
        handle: "post-2-blog-title-2",
        title: "Blog Title 2",
        subtitle: "Blog SubTitle or Slogan 2",
        date: new Date("December 17, 1996 03:24:00"),
        author: "Arda Kurt",
        category: "Technology",
        postNo: 2,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus placeat nemo quia dolorem amet architecto earum esse cum ad? Qui cum quo alias repudiandae distinctio nam impedit dignissimos aspernatur.
              Odio enim, alias, pariatur ex repudiandae quis maxime perferendis inventore hic, a laboriosam repellat praesentium provident libero tempora reprehenderit suscipit blanditiis illo nobis? Recusandae unde quisquam tempore, beatae cum perspiciatis?
              Doloremque veritatis eum molestias nemo harum temporibus libero, adipisci, provident doloribus soluta, vitae nam saepe similique ad a delectus ratione! Voluptatem, nobis ipsum. Animi, quaerat ducimus aperiam illo explicabo ipsa.
              Blanditiis nostrum voluptatem molestias rem mollitia! Modi laborum itaque porro repellendus. Velit sint ab nesciunt quae harum reiciendis, fugiat maiores natus omnis! Hic vel, doloremque ex nihil repudiandae dolorum perferendis.
              Totam similique eos alias iste est maiores, aliquid molestias. Facere quis quae magnam tempore, eaque necessitatibus! Libero, corrupti error, ad consectetur omnis, enim vero quod dolor adipisci eius in veniam.`,
        images: [
          "https://images.pexels.com/photos/4982737/pexels-photo-4982737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/3839427/pexels-photo-3839427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        _id: "12415114",
        handle: "post-3-blog-title-4",
        title: "Blog Title 4",
        subtitle: "Blog SubTitle or Slogan",
        date: new Date("December 17, 1997 03:24:00"),
        author: "Arda Kurt",
        category: "Technology",
        postNo: 4,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus placeat nemo quia dolorem amet architecto earum esse cum ad? Qui cum quo alias repudiandae distinctio nam impedit dignissimos aspernatur.
              Odio enim, alias, pariatur ex repudiandae quis maxime perferendis inventore hic, a laboriosam repellat praesentium provident libero tempora reprehenderit suscipit blanditiis illo nobis? Recusandae unde quisquam tempore, beatae cum perspiciatis?
              Doloremque veritatis eum molestias nemo harum temporibus libero, adipisci, provident doloribus soluta, vitae nam saepe similique ad a delectus ratione! Voluptatem, nobis ipsum. Animi, quaerat ducimus aperiam illo explicabo ipsa.
              Blanditiis nostrum voluptatem molestias rem mollitia! Modi laborum itaque porro repellendus. Velit sint ab nesciunt quae harum reiciendis, fugiat maiores natus omnis! Hic vel, doloremque ex nihil repudiandae dolorum perferendis.
              Totam similique eos alias iste est maiores, aliquid molestias. Facere quis quae magnam tempore, eaque necessitatibus! Libero, corrupti error, ad consectetur omnis, enim vero quod dolor adipisci eius in veniam.`,
        images: [
          "https://images.pexels.com/photos/8402390/pexels-photo-8402390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/8412193/pexels-photo-8412193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        _id: "1512231",
        handle: "post-3-blog-title-3",
        title: "Blog Title 3",
        subtitle: "Blog SubTitle or Slogan 3",
        date: new Date("December 17, 1998 03:24:00"),
        author: "Arda Kurt",
        category: "Technology",
        postNo: 3,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus placeat nemo quia dolorem amet architecto earum esse cum ad? Qui cum quo alias repudiandae distinctio nam impedit dignissimos aspernatur.
              Odio enim, alias, pariatur ex repudiandae quis maxime perferendis inventore hic, a laboriosam repellat praesentium provident libero tempora reprehenderit suscipit blanditiis illo nobis? Recusandae unde quisquam tempore, beatae cum perspiciatis?
              Doloremque veritatis eum molestias nemo harum temporibus libero, adipisci, provident doloribus soluta, vitae nam saepe similique ad a delectus ratione! Voluptatem, nobis ipsum. Animi, quaerat ducimus aperiam illo explicabo ipsa.
              Blanditiis nostrum voluptatem molestias rem mollitia! Modi laborum itaque porro repellendus. Velit sint ab nesciunt quae harum reiciendis, fugiat maiores natus omnis! Hic vel, doloremque ex nihil repudiandae dolorum perferendis.
              Totam similique eos alias iste est maiores, aliquid molestias. Facere quis quae magnam tempore, eaque necessitatibus! Libero, corrupti error, ad consectetur omnis, enim vero quod dolor adipisci eius in veniam.`,
        images: [
          "https://images.pexels.com/photos/4982737/pexels-photo-4982737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "https://images.pexels.com/photos/3839427/pexels-photo-3839427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
    ],
    hero: {
      title: "You’re only a stranger once",
      subtitle: "Personal tech blog!"
    }
  };

  const [state, dispatch] = useReducer(blogReducer, initalState);

  const getPost = (handle) => {
    let whichPost = state.blogPosts.find((post) => post.handle === handle);
    dispatch({ type: GET_BLOG_POST, payload: whichPost });
  };

  const getHeroSection = () => {
    let heroSection = state.hero;
    dispatch({type: GET_HERO_SECTION, payload: heroSection})
  }

  return (
    <BlogContext.Provider
      value={{
        blogPosts: state.blogPosts,
        activePost: state.activePost,
        hero: state.hero,
        getPost,
        getHeroSection
      }} 
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
