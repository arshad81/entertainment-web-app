import Header from "../components/header";
import Trending from "../components/trending";
import MovieCardGrid from "../components/movieCardGrid";
export default function Bookmarked(props) {
  return (
    <div className="lg:flex">
      <Header active="bookmark" />
      <div className="lg:max-w-[calc(100vw-130px)] lg:max-h-screen overflow-scroll">
        <div className="my-4 px-4 md:px-6 md:my-10">
          <MovieCardGrid title="Bookmarked Movies" data={props.data} type="bookmark-movies" />
        </div>
        <div className="my-4 px-4 md:px-6 md:my-10">
          <MovieCardGrid title="Bookmarked TV Series" data={props.data} type="bookmark-tv" />
        </div>
      </div>
    </div>
  );
}

