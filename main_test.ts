import { assertEquals } from "@std/assert";
import { add, multiple } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(() => {
  const got = multiple(2, 3);
  const expected = 6;

  assertEquals(got, expected)
});
