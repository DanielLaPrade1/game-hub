import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletonLoad = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} padding="10px">
        {isLoading &&
          skeletonLoad.map((skeleton) => (
            <GridItem margin={"10px"}>
              <GameCardSkeleton key={skeleton} />
            </GridItem>
          ))}

        {games.map((game) => (
          <>
            <GridItem margin={"10px"}>
              <GameCard game={game} />
            </GridItem>
          </>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
