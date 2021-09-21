import Header from "./Header";
import MovieList from "./MovieList";
import {useEffect, useState} from "react";
import Details from "./Details";

const api_key = process.env.REACT_APP_MOVIE_DB_API_KEY
const recentMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&include_adult=false&page=1`
const searchUrl = `
https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&include_adult=false&page=1`

const App = () => {

	const [movies, setMovies] = useState([])
	const [keyWord, setKeyWord] = useState('')
	const [modal, setModal] = useState(false)
	const [movieDetails, setMovieDetails] = useState(null)

	useEffect(() => {
		fetchMovies(recentMoviesUrl)
	}, [])

	const fetchMovies = (url) => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => setMovies(res.results));
	}

	const fetchMovieDetails = (movieId) => {
		fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`)
			.then((res) => res.json())
			.then((res) => setMovieDetails(res));
	}

	let timer = 0

	const searchMovie = (movie) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			setMovies([])
			setKeyWord(movie)
			if(movie) {
				fetchMovies(searchUrl + `&query=${movie}`)
			} else fetchMovies(recentMoviesUrl)
		}, 1000)
	}

	const toggleModal = () => {
		setModal(!modal)
	}

	const onMovieCardClickHandler = movieId => {
		toggleModal()
		fetchMovieDetails(movieId)
	}

	return (
		<>
			<div className="container">
				<Header searchHandle={searchMovie} />
				{movies.length > 0
					? <MovieList movies={movies} keyWord={keyWord} onMovieCardClickHandler={onMovieCardClickHandler}/>
					: <div className="spacingInner">Loading...</div>}
			</div>
			{modal && <Details modal={modal} toggleModal={toggleModal} movieDetails={movieDetails} setMovieDetails={setMovieDetails}/>}
		</>
)}

export default App;
