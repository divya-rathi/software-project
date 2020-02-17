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
    wrapper.find("input[type=password]").setValue("");
    wrapper.find("button").trigger("submit.prevent");
    expect(window.alert).toHaveBeenCalledWith(expectedArg);  
    //expect(wrapper.vm.$data.account.email).toBe("divya");
  });

  test("Check password", () => {
    const expectedArg = "Please enter both username and password";
    const component = factory();
    window.alert = jest.fn();
    wrapper.find("input[type=email]").setValue("");
    wrapper.find("input[type=password]").setValue("divya");
    wrapper.find("button").trigger("submit.prevent");
    //expect(wrapper.vm.$data.account.password).toBe("divya");
    expect(window.alert).toHaveBeenCalledWith(expectedArg);  
  });

  test('Check for Password field', () => {
    expect(wrapper.contains("input[type=password]")).toBeTruthy();
    //expect(wrapper.find("input[type=password]").attributes).toEqual("password");
  });

  test('Check for Email-id field', () => {
    expect(wrapper.contains("input[type=email]")).toBeTruthy();
  });

});
describe("Length", () => {
  const wrapper = factory();
  test('Check for Email-id length', () => {
    wrapper.find("input[type=email]").setValue("cb.en.u4cse17416@cb.students.amrita.edu");
    expect(wrapper.vm.$data.account.email.length).toBeGreaterThan(23)
  })
  test('Check for negative Email-id length', () => {
    wrapper.find("input[type=email]").setValue("cb.en.u4cse17416@cb.students.amrita.edu");
    expect(wrapper.vm.$data.account.email.length).not.toBeLessThan(23)
  })
});

describe("Credentials", () => {
  const wrapper = factory();
  test('Valid', () => {
    wrapper.find("input[type=email]").setValue("cb.en.u4cse20000@cb.students.amrita.edu");
    wrapper.find("input[type=password]").setValue("chocolate");
  })
});

