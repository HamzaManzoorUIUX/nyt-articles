import { FC, useContext, useEffect } from "react";
import { GlobalContext } from "../content/GlobalContext";
import { I_Article } from "../Interfaces";
import ArticleRow from "./ArticleRow";

const ArticleTable: FC = () => {
  const { articles, getArticles } = useContext(GlobalContext);
  useEffect(() => {
    getArticles(1);
  }, [getArticles]);
  console.log("articles", articles);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {articles.map((article: I_Article) => (
            <ArticleRow article={article} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleTable;
