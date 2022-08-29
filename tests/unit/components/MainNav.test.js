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
  /*test logged out state*/
  describe("when user is logged out", () => {
    it("should prompt user to sign in", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: false,
          };
        },
      });
      const loginButton = wrapper.findComponent({ name: "ActionButton" });
      const profileImage = wrapper.findComponent({ name: "ProfileImage" });
      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
    /*test logged in state*/
    describe("when user logs in", () => {
      it("should display user profile pic", () => {
        const wrapper = mount(MainNav, {
          data() {
            return {
              isLoggedIn: true,
            };
          },
        });
        const loginButton = wrapper.find("[data-test='loginButton']");
        const profileImage = wrapper.find("[data-test='profileImage']");
        expect(loginButton.exists()).toBe(false);
        expect(profileImage.exists()).toBe(true);
      });
    });
  });
});
