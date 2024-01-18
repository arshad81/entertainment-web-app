import movieLogo from "../assets/icon-category-movie.svg";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";
export default function MovieCardGrid(props) {
  var type = props.type;
  return (
    <div>
      <p className="text-white text-xl md:text-3xl font-light">{props.title}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 md:my-6 md:gap-7">
        {props.data.map((item) => {
          if (type == item.category) {
            return MovieCard(item);
          }
          else if(type == "bookmark-movies" && item.category == "Movie" && item.isBookmarked){
            return MovieCard(item);
          }
          else if(type == "bookmark-tv" && item.category == "TV Series" && item.isBookmarked){
            return MovieCard(item);
          }
          else if(type == "all"){
            return MovieCard(item);
          }
        })}
      </div>
    </div>
  );
}
function MovieCard(item) {
  return (
    <div>
      <div className="relative">
        <img
          className="rounded-xl md:hidden"
          src={item.thumbnail.regular.small}
        />
        <img
          className="rounded-xl hidden md:block lg:hidden"
          src={item.thumbnail.regular.medium}
        />
        <img
          className="rounded-xl hidden lg:block"
          src={item.thumbnail.regular.large}
        />
        <div className="absolute right-2 top-2 bg-black/40 rounded-full w-8 h-8 flex items-center justify-center">
          <img className="" src={bookmarkEmpty} />
        </div>
        <div className="my-2">
          <div className="flex justify-start gap-2 text-white font-light">
            <p className="text-xs">{item.year}</p>
            <div className="flex justify-center gap-1 items-center">
              <img src={movieLogo} />
              <p className="text-xs">{item.category}</p>
            </div>
            <p className="text-xs">{item.rating}</p>
          </div>
          <p className="text-white font-medium my-2">{item.title}</p>
        </div>
      </div>
    </div>
  );
}
