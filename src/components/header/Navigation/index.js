import { Toggle } from "../Toggle";

export const Navigation = () => {
  const Menu = [
    { Name: "Home", Url: "/" },
    { Name: "Blog", Url: "/blog" },
    { Name: "Contact", Url: "/contact" },
  ];

  return (
    <>
      <nav>
        <ul className="flex flex-row gap-4 items-center">
        {Menu.map(item => (
          <a href={item.Url} key={item.Name}>{item.Name}</a>
        ))}
        </ul>
      </nav>
      <Toggle />
    </>
  );
};
