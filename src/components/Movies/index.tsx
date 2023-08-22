interface Movie {
  movie: {
    title: string;
    description: string;
    images: any;
    releaseYear: number;
  };
}

const SingleMovie = (props: Movie) => {
  const { title, description, images, releaseYear } = props?.movie;
  return (
    <div className="movie">
      <img
        src={images?.posterArt?.url}
        alt={title}
      />
      <div className="overlay">
        <p className="Title">{title}</p>
        <p className="year">{releaseYear}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default SingleMovie;
