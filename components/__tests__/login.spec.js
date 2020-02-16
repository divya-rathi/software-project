import { shallowMount } from "@vue/test-utils";
import Login from "../../pages/login.vue";


const factory = () => {
  return shallowMount(Login, {
  });
};

describe("Login", () => {
  const wrapper = factory()
  test("mounts properly", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test("Has a button",() =>{ 
    expect(wrapper.contains('button')).toBe(true);

  });

  test("Check username", ()=>
  {
      wrapper.find("input[type=email]").setValue("divya");

  

    //   wrapper.find("button").trigger("submit.prevent");
      expect(wrapper.vm.$data.account.email).toBe("divya");
    //   name = Login.this.email;
    //   expect("").toBe(name);
  });
});