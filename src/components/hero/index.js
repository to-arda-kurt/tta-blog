import React, { useContext } from "react";
import BlogContext from "../../context/blogContext";

export const Hero = (props) => {
  const blogContext = useContext(BlogContext);
  const { hero } = blogContext;

  switch (props.type) {
    case "imgRight":
      return (
        <section className="flex content-between items-end flex-col flex-col-reverse md:flex-row gap-8 md:gap-2">
          <div className="flex flex-col gap-8">
            <h1 className="text-7xl">{hero.title}</h1>
            <h2 className="text-4xl">{hero.subtitle}</h2>
          </div>

          <div>
            <img
              className="rounded-lg"
              src="https://images.pexels.com/photos/11982694/pexels-photo-11982694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Tech Blog Hero"
            />
          </div>
        </section>
      );

    case "imgLeft":
      return (
        <section className="flex content-between items-end flex-col-reverse md:flex-row-reverse gap-8 md:gap-2">
          <div className="flex flex-col gap-8 md:text-right">
            <h1 className="text-7xl">{hero.title}</h1>
            <h2 className="text-4xl">{hero.subtitle}</h2>
          </div>

          <div>
            <img
              className="rounded-lg"
              src="https://images.pexels.com/photos/11982694/pexels-photo-11982694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Tech Blog Hero"
            />
          </div>
        </section>
      );

    default:
      break;
  }
};
