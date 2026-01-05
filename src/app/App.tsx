import { QueryProvider } from "./providers/QueryProvider";
import { Router } from "./router";
import { ErrorBoundary } from "../shared/components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <Router />
      </QueryProvider>
    </ErrorBoundary>
  );
}

export default App;
