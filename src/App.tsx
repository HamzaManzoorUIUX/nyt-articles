import ArticleTable from "./components/ArticleTable";
import { GlobalProvider } from "./content/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <ArticleTable />
    </GlobalProvider>
  );
};

export default App;
