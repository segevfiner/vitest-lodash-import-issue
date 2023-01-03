import { it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "../HomeView.vue";

it("does stuff", () => {
  const wrapper = mount(HomeView);
  expect(wrapper.get("p").text()).toBe("0");
});
