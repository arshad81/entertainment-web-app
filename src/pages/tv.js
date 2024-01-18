import Header from "../components/header";
import Trending from "../components/trending";
import MovieCardGrid from "../components/movieCardGrid";
export default function TV(props) {
  return (
    <div className="lg:flex">
      <Header active="app" />
      <div className="lg:max-w-[calc(100vw-130px)] lg:max-h-screen overflow-scroll">
        <div className="ps-4 md:ps-6">
          <Trending data={props.data} />
        </div>
        <div className="my-4 px-4 md:px-6 md:my-10">
          <MovieCardGrid title="Recommended for you" data={props.data} type="TV Series" />
        </div>
      </div>
    </div>
  );
}

