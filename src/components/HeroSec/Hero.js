import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import image from "../../images/image.svg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    marginTop: "3em",
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export function HeroSection() {
  const { classes } = useStyles();
  return (
    <div id="home">
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
            
              Arafat Akata <br /> A{" "}
              <span className={classes.highlight}>Software | Technical Support</span> Engineer
            </Title>
            <br/>
            <Text color="dimmed" mt="md">
             <p>Highly skilled and motivated Technical Support Engineer with a strong background in software engineering, providing exceptional customer service and resolving complex technical issues. Seeking a challenging position that utilizes my technical expertise, communication skills, and problem-solving abilities to contribute to the success of a dynamic organization. But I also understand the entire software development lifecycle, and I'm well-versed in DevOps tools like Docker, Github Action, Terraform and Kubernetes.</p>
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Developer with</b> – Strong ability to problem-solve, debug,
                and understand pertinent performance metrics.
              </List.Item>
             
              <List.Item>
                <b>Developer with</b> – Opportunity to work with the brightest
                minds inside and outside of my field.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Let connect
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
              </Button>
            </Group>
          </div>
          <Image src={image} className={classes.image} mt="3em"/>
        </div>
      </Container>
    </div>
  );
}
