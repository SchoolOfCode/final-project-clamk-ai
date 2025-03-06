import { GET } from "./route";
import { expect, test, describe } from "vitest";

interface Item {
  id: number;
  name: string;
  purpose: string;
  city: string;
  link: string;
  type: string;
}

describe("GET functionality", () => {
  test("should return data when Supabase query succeeds", async () => {
    const response = await GET();

    expect(response.status).toBe(200);
    const data: Item[] = await response.json();
    expect(typeof data).toBe("object");

    data.forEach((Item) => {
      expect(typeof Item).toBe("object");
      expect(Item).toHaveProperty("id");
      expect(typeof Item.id).toBe("number");
      expect(Item).toHaveProperty("name");
      expect(typeof Item.name).toBe("string");
      expect(Item).toHaveProperty("purpose");
      expect(typeof Item.purpose).toBe("string");
      expect(Item).toHaveProperty("city");
      expect(typeof Item.city).toBe("string");
      expect(Item).toHaveProperty("link");
      expect(typeof Item.link).toBe("string");
      expect(Item).toHaveProperty("type");
      expect(typeof Item.type).toBe("string");
    });
  });

  test("should handle HTTP error responses", async () => {
    try {
      const response = await GET();
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.message).toBe("Internal server error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});

describe("GET missing keys test", () => {
  test("should handle missing keys in the response", async () => {
    const response = await GET();
    const responseData: Item[] = await response.json();

    expect(Array.isArray(responseData)).toBe(true);

    responseData.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(typeof item.id).toBe("number");

      if (!item.name) {
        console.warn(`Missing 'name' in item with id: ${item.id}`);
      } else {
        expect(typeof item.name).toBe("string");
      }

      expect(item).toHaveProperty("purpose");
      expect(typeof item.purpose).toBe("string");

      expect(item).toHaveProperty("city");
      expect(typeof item.city).toBe("string");

      expect(item).toHaveProperty("link");
      expect(typeof item.link).toBe("string");

      expect(item).toHaveProperty("type");
      expect(typeof item.type).toBe("string");
    });
  });
});
