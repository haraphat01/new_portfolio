import { Box, Button, NavLink, Popover, Text } from "@mantine/core";
import {
  IconHome,
  IconNote,
  IconInfoCircle,
  IconQuestionMark,
  IconCoin,
} from "@tabler/icons";
import { useStyles } from "./Style";

export function NavbarMinimal() {
  const { classes } = useStyles();

  return (
    <Box sx={{ width: 200 }} mt={150}>
      <NavLink
        label="Home"
        icon={<IconHome size={26} stroke={1.5} />}
        variant="subtle"
        className={classes.box}
        component="a"
        href="/"
      />
      <NavLink
        label="Skill"
        icon={<IconNote size={26} stroke={1.5} />}
        childrenOffset={28}
        className={classes.box}
        component="a"
        href="#skill"
      />

      <NavLink
        label="Education"
        icon={<IconInfoCircle size={26} stroke={1.5} />}
        className={classes.box}
        component="a"
        href="#edu"
      />
      <NavLink
        label="Experience"
        icon={<IconCoin size={26} stroke={1.5} />}
        className={classes.box}
        component="a"
        href="#exp"
      />
      <NavLink
        label="Projects"
        icon={<IconQuestionMark size={26} stroke={1.5} />}
        childrenOffset={28}
        className={classes.box}
        component="a"
        href="#pro"
      />
      <Popover width={200} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button
            radius="xl"
            sx={{ height: 30, fontFamily: "Open Sans" }}
            m={30}
            mt="50%"
          >
            Let Connect
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="sm">
            Scrolldown and click the WhatsApp icon to get started.
          </Text>
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
}
