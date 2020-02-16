import { shallowMount } from "@vue/test-utils";
import Login from "../../pages/login.vue";

const factory = () => {
  return shallowMount(Login, {});
};

describe("Login", () => {
  const wrapper = factory();
  test("mounts properly", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test("Has a button", () => {
    expect(wrapper.contains("button")).toBe(true);
  });

  test("Check username", () => {
    const expectedArg = "Please enter both username and password";
    const component = factory();
    window.alert = jest.fn();
    //component.setState(state)
    //component.find('form').simulate('submit')
    wrapper.find("input[type=email]").setValue("divya");
    wrapper.find("button").trigger("submit.prevent");
    expect(window.alert).toHaveBeenCalledWith(expectedArg);  
    //expect(wrapper.vm.$data.account.email).toBe("divya");
  });
});
