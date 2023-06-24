import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid templateAreas={`"nav nav" "aside main"`}>
      <GridItem area="nav" bg="coral"></GridItem>
      <GridItem area="aside" bg="gold"></GridItem>
      <GridItem area="main" bg="dodgerblue"></GridItem>
    </Grid>
  );
};

export default App;
