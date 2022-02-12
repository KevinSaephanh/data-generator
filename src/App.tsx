import { AppRoutes } from "./routes";
import { Layout } from "./components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
