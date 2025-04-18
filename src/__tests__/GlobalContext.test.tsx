import { render, screen } from "@testing-library/react";
import { GlobalProvider, GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Dummy consumer for testing context values
const TestComponent = () => {
  const context = useContext(GlobalContext);

  return (
    <div>
      <button onClick={() => context.toggleModal(5)}>Open Modal</button>
      <button onClick={() => context.toggleModal()}>Close Modal</button>
      <p data-testid="show-modal">{String(context.showModal)}</p>
      <p data-testid="selected-id">{context.selectedArticleID}</p>
    </div>
  );
};

describe("GlobalContext", () => {
  it("provides initial values", () => {
    render(
      <GlobalProvider>
        <TestComponent />
      </GlobalProvider>
    );

    expect(screen.getByTestId("show-modal").textContent).toBe("false");
    expect(screen.getByTestId("selected-id").textContent).toBe("0");
  });

  it("updates showModal and selectedArticleID with toggleModal", async () => {
    render(
      <GlobalProvider>
        <TestComponent />
      </GlobalProvider>
    );

    const user = userEvent.setup();
    await user.click(screen.getByText("Open Modal"));

    expect(screen.getByTestId("show-modal").textContent).toBe("true");
    expect(screen.getByTestId("selected-id").textContent).toBe("5");

    await user.click(screen.getByText("Close Modal"));

    expect(screen.getByTestId("show-modal").textContent).toBe("false");
    expect(screen.getByTestId("selected-id").textContent).toBe("0");
  });
});
