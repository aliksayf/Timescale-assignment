import MovieCard from "./MovieCard";

const Movies = ({ movies, keyWord, onMovieCardClickHandler }) => {

    return (
        <>
            <h1>{ keyWord ? `Contained ${keyWord}` : 'Most Recent Movies'}</h1>
            <div className="movieList">
                { movies && movies.length > 0 ?
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} onMovieCardClickHandler={onMovieCardClickHandler}/>
                    ))
                        : <div>NOTHING</div>
                }
            </div>
        </>
    )
}

export default Movies;
