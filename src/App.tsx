import ArticleList from "./components/ArticleList";
import { GlobalProvider } from "./context/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container mx-auto">
        <h1 className="text-4xl mb-4">Articles Table</h1>
        <ArticleList />
      </div>
    </GlobalProvider>
  );
};

export default App;
