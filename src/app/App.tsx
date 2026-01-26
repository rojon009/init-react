import { QueryProvider } from "./providers/QueryProvider";
import { Router } from "./router";
import { ErrorBoundary } from "../shared/components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <div className="min-h-screen bg-background max-w-2xl mx-auto">
          <Router />
        </div>
      </QueryProvider>
    </ErrorBoundary >
  );
}

export default App;
