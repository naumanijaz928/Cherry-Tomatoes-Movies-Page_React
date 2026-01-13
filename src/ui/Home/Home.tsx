import { useEffect, useState } from "react";
import axios from "axios";
import SingleMovieMovie from "../../components/Movies";
import leftArrow from "../../assets/left-chevron.png";
import rightArrow from "../../assets/right-chevron.png";
import "./styles.scss";

export function Home() {
  interface Movie {
    title: string;
    description: string;
    images: any;
    releaseYear: number;
  }

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const api =
    "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json";
  const getMoviesFun = async () => {
    const res = await axios.get(api);
    if (res?.status < 400) {
      setMovies(res?.data?.entries);
    }
  };

  useEffect(() => {
    getMoviesFun();
  }, []);
  return (
    <>
      <div className="searchSection">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search movies by title"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mainSection">
        <p className="heading">Popular Movies</p>
        <div className="cardsSection">
          {movies
            ?.filter((movie: Movie) => {
              return search.toLowerCase() === ""
                ? movie
                : movie.title?.toLowerCase().includes(search.toLowerCase());
            })
            ?.map((movie: Movie) => (
              <SingleMovieMovie movie={movie} />
            ))}
        </div>
        <div className="pagination">
          <img src={leftArrow} alt="left" />
          {[...new Array(5)].map((v, index) => (
            <div className="pag_circle">{index + 1}</div>
          ))}
          <img src={rightArrow} alt="right" />
        </div>
      </div>
    </>
  );
}
