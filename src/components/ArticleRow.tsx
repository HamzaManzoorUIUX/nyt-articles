import { FC } from "react";
import { I_Article } from "../Interfaces";

const ArticleRow: FC<{ article: I_Article }> = ({ article }) => {
  return (
    <tr>
      <td>{article.id}</td>
    </tr>
  );
};

export default ArticleRow;
