import { Content1 } from "./screens/Contents/Content1";
import LayoutScreen from "./screens/Layout";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useEffect, useState } from "react";

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <ColorSchemeProvider
        // @ts-ignore
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          // @ts-ignore
          theme={{ colorScheme: colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <LayoutScreen />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
