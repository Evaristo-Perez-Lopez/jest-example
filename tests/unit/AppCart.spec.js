import { mount } from "@vue/test-utils";
import AppCart from "@/components/AppCart.vue";
import { createStore } from "vuex";

describe("AppCart", () => {
  test("Debe mostrar el precio total a cobrar", () => {
    const store = createStore({
      state: {
        items: [
          { name: "apple", cost: 10, quantity: 2 },
          { name: "pinia", cost: 15, quantity: 1 },
          { name: "tomatoe", cost: 5, quantity: 3 },
        ],
      },
    });
    const wrapper = mount(AppCart, {
      global: {
        provide: {
          store: store,
        },
      },
    });
    expect(wrapper.find("#total").text()).toBe("50");
  });
});
