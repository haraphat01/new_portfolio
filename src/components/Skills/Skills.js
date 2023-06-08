import {
  Card,
  Text,
  Container,
  Center,
  RingProgress,
  ThemeIcon,
  createStyles
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconCheck } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  highlight: {
    color: "rgba(122, 209, 221, 1)",
    borderRadius: theme.radius.sm,
    padding: "0px 15px",
    fontSize: 44,
    fontWeight: 500,
  },
  text: {
    textAlign: "center",
    padding: "2px 15px",
  },
}));


export function Skills() {
    const { classes } = useStyles();
  return (
      <Container
        mb={50}
        id="skills"
        style={{ marginBottom: "20px", marginTop: "3em" }}
      >
        <Card shadow="sm" p="md" radius="lg" withBorder>
          <Center>
            <span className={classes.highlight}>Skills</span>
          </Center>
          <Card.Section>
            <Carousel
              slideSize="40%"
              height={200}
              slideGap="xs"
              controlSize={25}
              loop
              mb={20}
            >
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 100, color: "ocean" }]}
                    label={
                      <Center>
                        <ThemeIcon
                          color="ocean"
                          variant="light"
                          radius="xl"
                          size="xl"
                        >
                          <IconCheck size={22} />
                        </ThemeIcon>
                      </Center>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    Python
                  </Text>
                </Center>
              </Carousel.Slide>
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 100, color: "ocean" }]}
                    label={
                      <Center>
                        <ThemeIcon
                          color="ocean"
                          variant="light"
                          radius="xl"
                          size="xl"
                        >
                          <IconCheck size={22} />
                        </ThemeIcon>
                      </Center>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    JavaScript
                  </Text>
                </Center>
              </Carousel.Slide>
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 100, color: "ocean" }]}
                    label={
                      <Center>
                        <ThemeIcon
                          color="ocean"
                          variant="light"
                          radius="xl"
                          size="xl"
                        >
                          <IconCheck size={22} />
                        </ThemeIcon>
                      </Center>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    React JS
                  </Text>
                </Center>
              </Carousel.Slide>
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 100, color: "ocean" }]}
                    label={
                      <Center>
                        <ThemeIcon
                          color="ocean"
                          variant="light"
                          radius="xl"
                          size="xl"
                        >
                          <IconCheck size={22} />
                        </ThemeIcon>
                      </Center>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    TypeScript
                  </Text>
                </Center>
              </Carousel.Slide>
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 100, color: "ocean" }]}
                    label={
                      <Center>
                        <ThemeIcon
                          color="ocean"
                          variant="light"
                          radius="xl"
                          size="xl"
                        >
                          <IconCheck size={22} />
                        </ThemeIcon>
                      </Center>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    Git
                  </Text>
                </Center>
              </Carousel.Slide>
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 100, color: "ocean" }]}
                    label={
                      <Center>
                        <ThemeIcon
                          color="ocean"
                          variant="light"
                          radius="xl"
                          size="xl"
                        >
                          <IconCheck size={22} />
                        </ThemeIcon>
                      </Center>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    DevOps
                  </Text>
                </Center>
              </Carousel.Slide>
            </Carousel>
          </Card.Section>
        </Card>
      </Container>
  );
}
