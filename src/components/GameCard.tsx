import { Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/UseGames";
import { MdComputer, MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { FaPlaystation, FaXbox, FaApple, FaLinux } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

const generatePlatformIcon = (platformName: string) => {
  let result;
  switch (platformName) {
    case "PC":
      result = <MdComputer size="30" />;
      break;
    case "PlayStation":
      result = <FaPlaystation size="30" />;
      break;
    case "Xbox":
      result = <FaXbox size="30" />;
      break;
    case "iOS":
      result = <MdPhoneIphone size="30" />;
      break;
    case "Android":
      result = <AiFillAndroid size="30" />;
      break;
    case "Apple Macintosh":
      result = <FaApple size="30" />;
      break;
    case "Linux":
      result = <FaLinux size="30" />;
      break;
    case "Web":
      result = <BsGlobe size="30" />;
      break;
    case "Nintendo":
      result = <SiNintendo size="30" />;
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
      <Card borderRadius="lg" w="90%" h="90%">
        <Image src={game.background_image} borderRadius="lg" h="60%" />
        <CardBody>
          <Flex>
            {game.parent_platforms.map(({ platform }) => (
              <Flex marginRight="10px">
                {generatePlatformIcon(platform.name)}
              </Flex>
            ))}
          </Flex>
          <Text fontSize="xl">{game.name}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
