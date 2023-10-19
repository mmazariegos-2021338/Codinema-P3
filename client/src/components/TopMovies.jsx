import MoreMoviesButton from "./MoreMoviesButton";
import TopMovieCards from "./TopMovieCards";

export default function () {
    return <section className="top-movies">
                <h2 id="top-movies-title">PELICULAS TOP</h2>
                <TopMovieCards />
                <MoreMoviesButton />
            </section>
}