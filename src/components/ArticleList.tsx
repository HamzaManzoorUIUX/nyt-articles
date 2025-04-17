import { FC, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../content/GlobalContext";
import { I_Article } from "../Interfaces";
import ArticleCard from "./ArticleCard";
import ArticleView from "./ArticleView";

const ArticleTable: FC = () => {
  const [period, setPeriod] = useState<1 | 7 | 30>(1);
  const { articles, loading, getArticles } = useContext(GlobalContext);
  useEffect(() => {
    getArticles(period);
  }, [period, getArticles]);
  console.log("articles", articles);

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end">
        <div>
          <label htmlFor="period">Test Other Periods</label>
          <select
            className="block w-[180px] h-10 border rounded"
            name="period"
            id="period"
            onChange={(e) => setPeriod(Number(e.target.value) as 1 | 7 | 30)}
          >
            <option value="1">1</option>
            <option value="7">7</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
      <div className="relative">
        {loading && (
          <div className="flex justify-center items-center fixed inset-0 bg-[#ffffff88]">
            <svg
              version="1.1"
              id="L7"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={100}
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
            >
              <path
                fill="#000"
                d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="2s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </path>
              <path
                fill="#000"
                d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 50 50"
                  to="-360 50 50"
                  repeatCount="indefinite"
                />
              </path>
              <path
                fill="#000"
                d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="2s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {articles.map((article: I_Article) => (
            <ArticleCard key={article?.id} article={article} />
          ))}
        </div>
      </div>
      <ArticleView />
    </div>
  );
};

export default ArticleTable;
