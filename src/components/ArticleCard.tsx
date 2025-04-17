import { FC, useContext, useMemo } from "react";
import { I_Article } from "../Interfaces";
import { GlobalContext } from "../content/GlobalContext";

const ArticleRow: FC<{ article: I_Article }> = ({ article }) => {
  const { toggleModal } = useContext(GlobalContext);
  const articleImg = useMemo(() => {
    const [{ "media-metadata": [imgUrl] = [] } = {}] = article.media || [];
    return imgUrl;
  }, [article]);

  return (
    <div
      className="bg-white rounded-xl shadow-md p-4 flex flex-col h-full cursor-pointer"
      onClick={() => toggleModal(article.id)}
    >
      <div className="flex-1">
        <div>
          {articleImg ? (
            <img
              src={articleImg?.url}
              width={articleImg?.width}
              height={articleImg?.height}
              className="w-full"
              alt={article.title}
            />
          ) : (
            <div className="bg-gray-300 w-full aspect-square"></div>
          )}
        </div>
        <div>
          <div className="text-xl font-semibold mb-2 line-clamp-2 min-h-[3rem]">
            {article.title}
          </div>
          <div className="text-gray-400 text-xs">{article?.published_date}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleRow;
