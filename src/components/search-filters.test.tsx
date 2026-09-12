import { render, screen } from "@testing-library/react";
import { SearchFilters } from "@/components/search-filters";

describe("SearchFilters", () => {
  it("renders all filter inputs", () => {
    render(
      <SearchFilters
        q=""
        type=""
        location=""
        focus=""
        types={["Consulting"]}
        locations={["Dhaka"]}
        focusAreas={["Penetration Testing"]}
      />,
    );

    expect(
      screen.getByPlaceholderText("Search companies, resources, communities..."),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Apply" })).toBeInTheDocument();
  });
});
