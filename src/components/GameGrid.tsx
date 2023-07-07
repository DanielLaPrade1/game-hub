import { Center, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletonLoad = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Center>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="20px"
        spacing="15px"
      >
        {isLoading &&
          skeletonLoad.map((skeleton) => (
            <GridItem>
              <GameCardSkeleton key={skeleton} />
            </GridItem>
          ))}

        {games.map((game) => (
          <>
            <GridItem>
              <GameCard game={game} />
            </GridItem>
          </>
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default GameGrid;
