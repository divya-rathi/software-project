import { shallowMount } from "@vue/test-utils";
import component from "../../default.vue";

const factory = () => {
  return shallowMount(component, {});
};

describe("component", () => {
  const wrapper = factory();
  test("mounts properly", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
});
// describe("Length", () => {
//     const wrapper = factory();
//     test('Check for course-id length correct', () => {
//       wrapper.find("input[type=text]").setValue("15CSE111");
//       expect(wrapper.vm.$data.courseCode.length).toBe(8)
//     });
//     test('Check for course-id length incorrect', () => {
//       wrapper.find("input[type=text]").setValue("15cse");
//       expect(wrapper.vm.$data.courseCode.length).not.toBe(8)
//     });
//   });

