import movieLogo from "../assets/icon-category-movie.svg";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";

export default function Trending(props) {
  console.log(props.data);
  return (
    <div className="my-6 text-white">
      <p className="text-xl md:text-3xl my-4 md:mt-8">Trending</p>
      <div className="flex flex-nowrap overflow-scroll gap-4 md:mt-6">
        {props.data.map((item, index) => {
          if (item.isTrending) {
            return (
              <div
                key={index}
                className="min-w-60 h-36 md:min-w-470p md:h-56 relative rounded-md overflow-hidden"
              >
                <img
                  className="absolute h-full w-full inset-0 rounded-md opacity-90 md:hidden"
                  src={"." + item.thumbnail.trending.small}
                />
                <img
                  className="absolute h-full w-full inset-0 rounded-md opacity-90 hidden md:block"
                  src={"." + item.thumbnail.trending.large}
                />
                <div className="absolute right-2 top-2 bg-black/40 rounded-full w-8 h-8 flex items-center justify-center">
                  <img className="" src={bookmarkEmpty} />
                </div>
                <div className="absolute bottom-4 left-4 ">
                  <div className="flex justify-start gap-5 font-light">
                    <p className="text-sm">{item.year}</p>
                    <div className="flex justify-center gap-1 items-center">
                      <img src={movieLogo} />
                      <p className="text-sm">{item.category}</p>
                    </div>
                    <p className="text-sm">{item.rating}</p>
                  </div>
                  <p className="font-bold text-base">{item.title}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
