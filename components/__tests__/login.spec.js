import { shallowMount } from "@vue/test-utils";
import Logo from "../../pages/login.vue";


const factory = () => {
  return shallowMount(Logo, {
  });
};

describe("Logo", () => {
  const wrapper = factory()
  test("mounts properly", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test("Has a button",() =>{ 
    expect(wrapper.contains('button')).toBe(true);

  })
  test("Has a emain",() =>{ 
    expect(wrapper.html()).toContain('<input type=email/>');

  })
});