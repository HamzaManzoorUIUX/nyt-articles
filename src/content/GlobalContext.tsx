import axios from "axios";
import { createContext, FC, ReactNode, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface I_articles {
  articles: unknown[];
  getArticles?: (period: 1 | 7 | 30) => void;
}

export const GlobalContext = createContext<I_articles | undefined>(undefined);

export const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [articlesState, setArticleState] = useState<I_articles>({
    articles: [],
  });
  const apiKey = import.meta.env.VITE_NYT_API_KEY;
  const getArticles = async (period: 1 | 7 | 30 = 30) => {
    try {
      const response = await axios(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${apiKey}`
      );
      if (response.status === 200) {
        setArticleState(response.data);
      } else {
        throw new Error(`Error in api call ${response.status}`);
      }
    } catch (error: unknown) {
      const message = (error as Error)?.message || "unknown Error";
      toast.error(message);
    }
  };
  return (
    <GlobalContext.Provider value={{ ...articlesState, getArticles }}>
      {children}
      <Toaster />
    </GlobalContext.Provider>
  );
};
