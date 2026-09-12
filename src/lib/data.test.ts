import { filterEntities, getStats } from "@/lib/data";

describe("data filters", () => {
  it("filters companies by location and focus area", () => {
    const results = filterEntities({
      category: "companies",
      location: "Rajshahi",
      focus: "Malware",
    });

    expect(results).toHaveLength(1);
    expect(results[0].id).toBe("security-talent");
  });

  it("returns stats totals", () => {
    const stats = getStats();

    expect(stats.total).toBeGreaterThan(0);
    expect(stats.byCategory.companies).toBe(5);
    expect(stats.byCategory.universities).toBe(4);
  });
});
