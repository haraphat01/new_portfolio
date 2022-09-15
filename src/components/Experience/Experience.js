import { Center, Container, createStyles } from "@mantine/core";
import ExpComp from "./ExpComp";

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

export function Experience() {
  const { classes } = useStyle();
  return (
    <Container id="exp">
      <Center>
        <span className={classes.highlight}>Experience</span>
      </Center>
      <ExpComp />
    </Container>
  );
}
