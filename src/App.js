import { AppShell, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import "./App.css";
import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderAction } from "./components/Header/Header";
import {HeroSection } from "./components/HeroSec/Hero";
import { Skills } from "./components/Skills/Skills";
import { Education } from "./components/Education/Education";
import {Experience} from "./components/Experience/Experience";
import { Project } from "./components/Projects/Project";


function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  return (
    <div>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colors: {
              brand: ["#FFFFFF"],
              ocean: [
                "#7AD1DD",
                "#5FCCDB",
                "#44CADC",
                "#2AC9DE",
                "#1AC2D9",
                "#11B7CD",
                "#09ADC3",
                "#0E99AC",
                "#128797",
                "#147885",
              ],
            },
            primaryColor: "ocean",
            secondaryColor: "brand",
            colorScheme,
          }}
        >
          <AppShell
            header={<HeaderAction />}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
                padding: 0,
              },
            })}
          >
           <HeroSection />
           <Skills />
           <Education />
           <Experience />
           <Project />
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
