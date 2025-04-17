import ArticleTable from "./components/ArticleTable";
import { GlobalProvider } from "./content/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container mx-auto">
        <h1 className="text-4xl mb-4">Articles Table</h1>
        <ArticleTable />
      </div>
    </GlobalProvider>
  );
};

export default App;
