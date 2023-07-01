import { Badge, Box, Card, Flex, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius="lg" w="350px" h="300px">
      <Skeleton borderRadius="lg" h="60%" />
      <Box p="4">
        <Flex justify="space-between">
          <Flex>
            <Skeleton marginRight="10px" w="20px" h="20px" />
            <Skeleton marginRight="10px" w="20px" h="20px" />
            <Skeleton marginRight="10px" w="20px" h="20px" />
          </Flex>
          <Badge colorScheme="green" fontSize="md">
            <Skeleton w="30px" h="20px" />
          </Badge>
        </Flex>
        <Skeleton mt="3" w="70%" h="20px" />
      </Box>
    </Card>
  );
};

export default GameCardSkeleton;
