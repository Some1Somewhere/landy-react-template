const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/terms-and-conditions",
    exact: true,
    component: "TermsAndConditions",
  },
  {
    path: "/privacy-policy",
    exact: true,
    component: "PrivacyPolicy",
  },
  {
    path: "/get",
    exact: true,
    component : "RedirectToApp",
  },
  {
    path: "/test",
    exact: true,
    component : "RedirectToTestingApp",
  },
  {
    path: "/delete-account",
    exact: true,
    component : "DeleteAccount",
  },
  {
    path: "/about-us",
    exact: true,
    component : "AboutUs",
  }
];

export default routes;
