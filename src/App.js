import { Header } from "./components/header";
import BlogState from "./context/blogState";
import { Hero } from "./components/hero";
import {BlogSection} from "./components/blogSection";

function App() {
  return (
    <BlogState>
      <>
        <Header />
        <main className="py-8 sm:px-4 dark:text-white">
          <Hero type="imgRight" />
          <BlogSection type="Technology"/>
        </main>
      </>
    </BlogState>
  );
}

export default App;
