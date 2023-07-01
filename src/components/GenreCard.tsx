import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Genre } from "../hooks/UseGenres";

interface Props {
  genre: Genre;
}

const GenreCard = ({ genre }: Props) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      maxW="300px"
      margin="10px"
    >
      <Image
        objectFit="cover"
        maxW="25%"
        maxH={"80%"}
        src={genre.image_background}
        alt="Caffe Latte"
      />
      <CardBody>
        <Heading size="md">{genre.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GenreCard;
