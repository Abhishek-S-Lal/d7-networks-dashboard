import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { AppRoutes } from "./routes/Routes";
import "./App.css"

export default function App() {
  return <MantineProvider theme={theme}>
    <AppRoutes />
  </MantineProvider>;
}
