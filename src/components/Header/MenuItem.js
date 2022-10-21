import React from "react";
import { Group } from "@mantine/core";
import { useStyles } from "./Style";

const links = [
  { link: "/", label: "Home" },
  { link: "#skills", label: "Skill" },
  { link: "#edu", label: "Education" },
  { link: "#exp", label: "Experience" },
  { link: "#pro", label: "Projects" },
];

export function MenuItem() {
  const { classes } = useStyles();
  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Group spacing={5} className={classes.links}>
      {items}
    </Group>
  );
}
