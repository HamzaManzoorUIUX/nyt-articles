// src/__tests__/App.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App Component", () => {
  it("renders heading and article list", () => {
    render(<App />);
    expect(screen.getByText(/Articles Table/i)).toBeInTheDocument();
  });
});
