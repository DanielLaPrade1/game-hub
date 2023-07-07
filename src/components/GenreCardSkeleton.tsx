import { Card, Skeleton, VStack } from "@chakra-ui/react";

const GenreCardSkeleton = () => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      marginBottom="10px"
      marginLeft="10px"
    >
      <VStack align="flex-start" flex={1}>
        <Skeleton height="60px" width="20%" />
      </VStack>
    </Card>
  );
};

export default GenreCardSkeleton;
