import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/UseGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px">
        {games.map((game) => (
          <GridItem rowSpan={1}>
            <GameCard game={game} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
