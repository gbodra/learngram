import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import App from "../src/App.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: {},
  },
});

describe("App", () => {
  const wrapper = shallowMount(App, { store, localVue });

  it("is a Vue instance", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
