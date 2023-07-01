import useGenres from "../hooks/UseGenres";
import GenreCard from "./GenreCard";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <>
      {data.map((genre) => (
        <GenreCard genre={genre}></GenreCard>
      ))}
    </>
  );
};

export default GenreList;
