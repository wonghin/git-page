import { useLocalStorage } from "@mantine/hooks";
import LayoutScreen from "./screens/Layout";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { Todo } from "./screens/Todo";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  // const [colorScheme, setColorScheme] = useState("light");
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
