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
      marginBottom="10px"
      marginLeft="10px"
    >
      <Image
        objectFit="cover"
        maxW="20%"
        maxH="90%"
        src={genre.image_background}
        alt="Error"
      />
      <CardBody>
        <Heading size="20px">{genre.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GenreCard;
