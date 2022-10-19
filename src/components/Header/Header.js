import { Header, Container, Group, Button,  Burger, Drawer, Popover, Text } from "@mantine/core";
import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { NavbarMinimal } from "./Navbar";
import { useStyles } from "./Style";
import { SwitchToggle } from "./SwitchToggle";

export function HeaderAction() {

  const { classes } = useStyles();
   const [opened, setOpened] = useState(false);

  return (
    <Header height={60} sx={{ borderBottom: 0 }} mb={150}>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="sm"
        size="sm"
      >
        <NavbarMinimal />
      </Drawer>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={() => setOpened(true)}
            className={classes.burger}
            size="sm"
          />
          <Text className={classes.text}>Arafat</Text>
        </Group>
        <MenuItem />
        <SwitchToggle />
        <Popover width={200} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button
              radius="xl"
              sx={{ height: 30 }}
              className={classes.btn}
              variant="outline"
            >
              Connect with me
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="sm">
              Scrolldown and click the WhatsApp icon to get started.
            </Text>
          </Popover.Dropdown>
        </Popover>
      </Container>
    </Header>
  );
}
