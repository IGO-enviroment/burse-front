import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { StoreProvider } from "./app/providers/store"
import { ErrorBoundary } from "./app/providers/error-boundary"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/app"
import { theme } from "./shared/mui"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </StrictMode>,
)
