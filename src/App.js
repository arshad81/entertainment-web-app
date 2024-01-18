import data from './data.json';

import Header from "./components/header";
import Trending from "./components/trending";
import MovieCardGrid from "./components/movieCardGrid";
function App() {
  return (
    <div className="lg:flex">
      <Header active="app" />
      <div className="lg:max-w-[calc(100vw-130px)] lg:max-h-screen overflow-scroll">
        <div className="ps-4 md:ps-6">
          <Trending data={data} />
        </div>
        <div className="my-4 px-4 md:px-6 md:my-10">
          <MovieCardGrid title="Recommended for you" data={data} type="all"/>
        </div>
      </div>
    </div>
  );
}

export default App;
