import {
  Badge,
  Card,
  CardBody,
  Flex,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius="lg" width="300px" h="300px">
      <Skeleton height="60%" borderRadius="lg" />
      <CardBody p="4">
        <Flex justify="space-between">
          <Stack direction="row" spacing="1">
            <Skeleton height="24px" width="24px" borderRadius="full" />
            <Skeleton height="24px" width="24px" borderRadius="full" />
            <Skeleton height="24px" width="24px" borderRadius="full" />
          </Stack>
          <Badge colorScheme="green" fontSize="md">
            <Skeleton height="16px" width="40px" />
          </Badge>
        </Flex>
        <Text fontSize="xl" mt="3px">
          <Skeleton height="20px" width="80%" />
        </Text>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
