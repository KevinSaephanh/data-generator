import { AppRoutes } from "./routes";
import { Layout } from "./components/Layout/Layout";
import "./App.css";
import { AppProvider } from "./store/AppProvider";

function App() {
  return (
    <Layout>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </Layout>
  );
}

export default App;
