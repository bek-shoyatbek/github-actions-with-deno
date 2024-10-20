import { assertEquals } from "@std/assert";
import { add, multiple, subsctruct } from "./main.ts";

Deno.test("should add a to b", () => {
  const got = add(2, 3);
  const expected = 5;
  assertEquals(got, expected);
});

Deno.test("Should multiple a by b", () => {
  const got = multiple(2, 3);
  const expected = 6;

  assertEquals(got, expected)
});

Deno.test("Should substruct a by b", () => {
  const got = subsctruct(4, 3);
  const expected = 1;

  assertEquals(got, expected);
})