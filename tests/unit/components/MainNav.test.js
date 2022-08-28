import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("should display company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Boogle Careers");
  });
  it("should display menu items for nav bar", function () {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll("[data-test='menuItemData']");
    const navMenuText = navigationMenuItems.map((item) => item.text());
    expect(navMenuText).toEqual([
      "Teams",
      "Locations",
      "Life at Boogle",
      "How we Hire",
      "Students",
      "Jobs",
    ]);
    console.log(navMenuText);
  });
});
