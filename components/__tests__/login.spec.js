import { shallowMount } from "@vue/test-utils";
import Login from "../../pages/login.vue";


const factory = () => {
  return shallowMount(Login, {});
};
const wrapper = factory();

describe("Page load check",() => {
  test("mounts properly", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

describe("Components Check", () => {
  test("Has a button", () => {
    expect(wrapper.contains("button")).toBe(true);
  });

  test("Check for Password field", () => {
    expect(wrapper.contains("input[type=password]")).toBeTruthy();
  });

  test("Check for EmailId field", () => {
    expect(wrapper.contains("input[type=email]")).toBeTruthy();
  });
  
  test("Password Type", () => {
    const att = wrapper.find("#pass").attributes("type");
    expect(att).toBe("password");
  })
  
});

describe("Credentials" , () => {
  test("Username Missing", () => {
    const expectedArg = "Please enter both username and password";
    const component = factory();
    window.alert = jest.fn();
    wrapper.find("input[type=email]").setValue("divya");
    wrapper.find("input[type=password]").setValue("");
    wrapper.find("button").trigger("submit.prevent");
    expect(window.alert).toHaveBeenCalledWith(expectedArg);  
  })

  test("Password Missing", () => {
    const expectedArg = "Please enter both username and password";
    const component = factory();
    wrapper.find("input[type=email]").setValue("");
    wrapper.find("input[type=password]").setValue("divya");
    wrapper.find("button").trigger("submit.prevent");
    expect(window.alert).toHaveBeenCalledWith(expectedArg);  
  })

});

describe("Length", () => {
  const wrapper = factory();
  test("Check for Email-id length", () => {
    wrapper.find("input[type=email]").setValue("cb.en.u4cse17416@cb.students.amrita.edu");
    expect(wrapper.vm.$data.account.email.length).toBeGreaterThan(23)
  });
  test("Check for negative Email-id length", () => {
    wrapper.find("input[type=email]").setValue("cb.en.u4cse17416@cb.students.amrita.edu");
    expect(wrapper.vm.$data.account.email.length).not.toBeLessThan(23)
  });
});