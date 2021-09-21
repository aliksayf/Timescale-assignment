import closeIcon from '../images/close-icon.svg'

const Details = ({modal, toggleModal, movieDetails, setMovieDetails}) => {

    const posterSrc = movieDetails && movieDetails.poster_path
        ?`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieDetails.poster_path}`
        : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'

    const closeHandler = () => {
        setMovieDetails(null)
        if (modal) toggleModal()
    }

    return (<div className="modal-container">
            <div className="back" onClick={closeHandler}>

            </div>
            <div className="front">
                {(movieDetails && movieDetails.id)
                    ? <div className="details">
                        <div className="close" onClick={closeHandler}>
                            <img src={closeIcon} alt="close"/>
                        </div>
                        <div className="poster">
                            <img src={posterSrc} alt={movieDetails.title + ' poster'}/>
                            <div className="details_rating">
                                <div>
                                    {movieDetails.vote_average}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="title">
                                {movieDetails.title}
                                ({new Date(movieDetails.release_date).getFullYear()})
                            </h2>
                            <em>{movieDetails.tagline}</em>
                            <p>{movieDetails.runtime} min</p>
                            <p>{movieDetails.genres.map(gen => <mark key={gen.name}>{gen.name}  </mark>)}</p>
                            <p>{movieDetails.overview}</p>
                        </div>
                    </div>
                : <div className="spinner">Loading...</div>}
            </div>
        </div>
    )
}

export default Details;
