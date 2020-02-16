import { shallowMount } from "@vue/test-utils";
import Logo from "../../pages/login.vue";

const factory = () => {
  return shallowMount(Logo, {});
};

describe("Logo", () => {
  const wrapper = factory();
  test("mounts properly", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test("Has a button", () => {
    expect(wrapper.contains("button")).toBe(true);
  });
  test("Has a email", () => {
    expect(wrapper.contains("input[type=email]")).toBe(true);
  });
});
