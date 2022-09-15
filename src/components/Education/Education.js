import { Center, Container, createStyles } from "@mantine/core";
import EduComp from "./EduComp";

const useStyle = createStyles((theme) => ({
  highlight: {
    color: "rgba(122, 209, 221, 1)",
    borderRadius: theme.radius.sm,
    padding: "0px 15px",
    fontSize: 44,
    fontWeight: 500,
    marginTop: "3em",
  },
}));

export function Education() {
  const { classes } = useStyle();
  return (
    <Container id="edu" >
      <Center>
        <span className={classes.highlight}>Education</span>
      </Center>
      <EduComp />
    </Container>
  );
}
