import { Box, Flex } from "@chakra-ui/react";
import useGenres from "../hooks/UseGenres";
import GenreCard from "./GenreCard";
import GenreCardSkeleton from "./GenreCardSkeleton";

const GenreList = () => {
  const { isLoading, data } = useGenres();
  const skeletonLoad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <>
      {isLoading &&
        skeletonLoad.map((skeleton) => <GenreCardSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <GenreCard genre={genre}></GenreCard>
      ))}
    </>
  );
};

export default GenreList;
