import { Badge, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/UseGames";
import { MdComputer, MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { FaPlaystation, FaXbox, FaApple, FaLinux } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import getCroppedImage from "../services/image-url";

const generatePlatformIcon = (platformName: string) => {
  let result;
  switch (platformName) {
    case "PC":
      result = <MdComputer size="20" />;
      break;
    case "PlayStation":
      result = <FaPlaystation size="20" />;
      break;
    case "Xbox":
      result = <FaXbox size="20" />;
      break;
    case "iOS":
      result = <MdPhoneIphone size="20" />;
      break;
    case "Android":
      result = <AiFillAndroid size="20" />;
      break;
    case "Apple Macintosh":
      result = <FaApple size="20" />;
      break;
    case "Linux":
      result = <FaLinux size="20" />;
      break;
    case "Web":
      result = <BsGlobe size="20" />;
      break;
    case "Nintendo":
      result = <SiNintendo size="20" />;
      break;
    default:
      break;
  }
  return result;
};

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius="lg" h="300px">
        <Image
          src={getCroppedImage(game.background_image)}
          borderRadius="lg"
          h="60%"
        />
        <CardBody>
          <Flex justify="space-between">
            <Flex>
              {game.parent_platforms.map(({ platform }) => (
                <Flex marginRight="5%" overflow="hidden">
                  {generatePlatformIcon(platform.name)}
                </Flex>
              ))}
            </Flex>
            <Badge colorScheme="green" fontSize="md">
              {game.metacritic}
            </Badge>
          </Flex>
          <Text fontSize="xl" mt="3px">
            {game.name}
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
