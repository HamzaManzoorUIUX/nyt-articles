import { FC } from "react";
import { I_Article } from "../Interfaces";

const ArticleRow: FC<{ article: I_Article; index: number }> = ({
  article,
  index,
}) => {
  return (
    <tr className="odd:bg-gray-50 hover:bg-blue-50 transition-colors cursor-pointer">
      <td className="px-4 py-2 text-sm text-gray-800">{index + 1}</td>
      <td className="px-4 py-2 text-sm text-gray-800">{article.title}</td>
      <td className="px-4 py-2 text-sm text-gray-800 flex flex-wrap">
        {article.adx_keywords
          .split(";")
          .slice(0, 5)
          .map((tag: string) => (
            <span className="bg-green-200 text-xs mr-2 mb-1 px-2 py-1 rounded-4xl">
              {tag}
            </span>
          ))}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 min-w-[120px]">
        {article.published_date}
      </td>
    </tr>
  );
};

export default ArticleRow;
