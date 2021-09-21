const Card = ({movie, onMovieCardClickHandler}) => {
    const src = movie.poster_path
        ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`
        : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'

    return (
        < >
            <div className="movieCard" onClick={() => onMovieCardClickHandler(movie.id)}>

                <div className="poster" style={{backgroundImage: `url(${src})`}}>
                </div>
                <div className="label">{movie.title}</div>
				<div className="rating">
                    <div>
                        {movie.vote_average}
                    </div>
				</div>
            </div>
        </>
    )
}

export default Card;
