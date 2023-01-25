import AppHeader from "@/components/AppHeader.vue";
import { mount } from "@vue/test-utils";
describe("AppHeader", () => {
  //caso 1
  test("Si el usuario no está authenticado, no mostrar el boton de salir", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(false);
  });
  // caso 2
  test("Si el usuario está authenticado, mostrar el boton de salir", async () => {
    const wrapper = mount(AppHeader);
    await wrapper.setData({ loggedIn: true });
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
