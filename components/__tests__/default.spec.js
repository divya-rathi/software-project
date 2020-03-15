import { shallowMount } from "@vue/test-utils";
import nav from "../../layouts/default.vue"
import "../../store/users/index.js"

const factory1 = () => {
    return shallowMount(nav, {});
  };
  const wrapper1 = factory1();
  
  describe("Page load check",() => {
    test('Redirected', () => {
        expect(wrapper1.contains('#loginnav')).toBe(true);
      })
  });  