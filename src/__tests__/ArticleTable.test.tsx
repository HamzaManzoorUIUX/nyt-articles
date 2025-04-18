import { render, screen, waitFor } from "@testing-library/react";
import { GlobalContext } from "../context/GlobalContext"; // Import GlobalContext
import ArticleList from "../components/ArticleList";
import { describe, expect, it, vi } from "vitest";
import { I_Article } from "../Interfaces";

// New mock article data
const mockArticle: I_Article = {
  uri: "nyt://article/1d41dfc3-6337-5925-bc4d-9ce3ef94375d",
  url: "https://www.nytimes.com/2025/04/16/science/astronomy-exoplanets-habitable-k218b.html",
  id: 100000010111788,
  asset_id: 100000010111788,
  source: "New York Times",
  published_date: "2025-04-16",
  updated: "2025-04-17 16:05:59",
  section: "Science",
  subsection: "",
  nytdsection: "science",
  adx_keywords:
    "Extraterrestrial Life;Space and Astronomy;Planets;James Webb Space Telescope;Research;Cambridge University;Astrophysical Journal Letters",
  column: null,
  byline: "By Carl Zimmer",
  type: "Article",
  title: "Astronomers Detect a Possible Signature of Life on a Distant Planet",
  abstract:
    "Further studies are needed to determine whether K2-18b, which orbits a star 120 light-years away, is inhabited, or even habitable.",
  des_facet: [
    "Extraterrestrial Life",
    "Space and Astronomy",
    "Planets",
    "James Webb Space Telescope",
    "Research",
  ],
  org_facet: ["Cambridge University", "Astrophysical Journal Letters"],
  per_facet: [],
  geo_facet: [],
  media: [
    {
      type: "image",
      subtype: "photo",
      caption:
        "An artist's conception of a Hycean exoplanet like K2-18b orbiting a red dwarf star.",
      copyright: "A. Smith, N. Madhusudhan/University of Cambridge",
      approved_for_syndication: 0,
      "media-metadata": [
        {
          url: "https://static01.nyt.com/images/2025/04/15/multimedia/15HS-ALIENS-pcgz/15HS-ALIENS-pcgz-thumbStandard.jpg",
          format: "Standard Thumbnail",
          height: 75,
          width: 75,
        },
        {
          url: "https://static01.nyt.com/images/2025/04/15/multimedia/15HS-ALIENS-pcgz/15HS-ALIENS-pcgz-mediumThreeByTwo210.jpg",
          format: "mediumThreeByTwo210",
          height: 140,
          width: 210,
        },
        {
          url: "https://static01.nyt.com/images/2025/04/15/multimedia/15HS-ALIENS-pcgz/15HS-ALIENS-pcgz-mediumThreeByTwo440.jpg",
          format: "mediumThreeByTwo440",
          height: 293,
          width: 440,
        },
      ],
    },
  ],
  eta_id: 0,
};

describe("ArticleList", () => {
  it("displays loading spinner when articles are loading", () => {
    render(
      <GlobalContext.Provider
        value={{
          articles: [],
          loading: true,
          getArticles: vi.fn(),
          showModal: false,
          selectedArticleID: null,
          selectedArticle: null,
          toggleModal: vi.fn(),
        }}
      >
        <ArticleList />
      </GlobalContext.Provider>
    );

    // Initially, loading state should be true, so the spinner should be visible
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("displays articles when loading is false", async () => {
    // Mock the context to return the new article and loading false
    const mockGetArticles = vi.fn().mockResolvedValue([mockArticle]);

    const mockContextValue = {
      articles: [mockArticle],
      loading: false,
      getArticles: mockGetArticles,
      showModal: false,
      selectedArticleID: null,
      selectedArticle: null,
      toggleModal: vi.fn(),
    };

    render(
      <GlobalContext.Provider value={mockContextValue}>
        <ArticleList />
      </GlobalContext.Provider>
    );

    // Wait for the component to finish loading the articles
    await waitFor(() => expect(mockGetArticles).toHaveBeenCalled());

    // Check if the article is displayed
    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
  });
});
