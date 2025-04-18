import axios from "axios";
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import toast, { Toaster } from "react-hot-toast";
import { I_Article } from "../Interfaces";

interface I_ContextInitialData {
  articles: I_Article[];
  loading: boolean;
  showModal: boolean;
  selectedArticleID: number | null;
  selectedArticle: I_Article | undefined | null;
  toggleModal: (id?: number) => void;
  getArticles: (period: 1 | 7 | 30) => void;
}
const initialValue: I_ContextInitialData = {
  articles: [],
  loading: false,
  showModal: false,
  selectedArticleID: 0,
  selectedArticle: undefined,
  toggleModal: () => {},
  getArticles: () => {},
};
export const GlobalContext = createContext<I_ContextInitialData>(initialValue);

export const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [articlesState, setArticleState] = useState<I_Article[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedArticleID, setSelectedArticleID] = useState(0);
  const [loading, setLoading] = useState(false);
  const selectedArticle = useMemo(() => {
    return articlesState.find((article) => article.id === selectedArticleID);
  }, [selectedArticleID, articlesState]);
  const apiKey = import.meta.env.VITE_NYT_API_KEY;
  const toggleModal = (id?: number) => {
    if (id) {
      setShowModal(true);
      setSelectedArticleID(id);
    } else {
      setShowModal(false);
      setSelectedArticleID(0);
    }
  };
  const getArticles = useCallback(
    async (period: 1 | 7 | 30) => {
      try {
        setLoading(true);
        const response = await axios(
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${apiKey}`
        );
        if (response.status === 200) {
          setArticleState(response.data.results);
        } else {
          throw new Error(`Error in api call ${response.status}`);
        }
      } catch (error: unknown) {
        const message = (error as Error)?.message || "unknown Error";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    },
    [apiKey]
  );
  return (
    <GlobalContext.Provider
      value={{
        articles: articlesState,
        loading,
        selectedArticleID,
        selectedArticle,
        showModal,
        toggleModal,
        getArticles,
      }}
    >
      {children}
      <Toaster />
    </GlobalContext.Provider>
  );
};
