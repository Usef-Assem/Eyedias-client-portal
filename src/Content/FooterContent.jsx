export const headerLinks = {
  beforeLogin: [
    { id: 1, text: "For creators", link: "/" },
    { id: 2, text: "For enterprise", link: "/enterprise" },
    { id: 3, text: "Briefs", link: "/briefs" },
    { id: 4, text: "Creative Corner", link: "/creativecorner" },
    // { id: 5, text: "Contact Us", link: "/" },
  ],
  afterLogin: [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Briefs", link: "/briefs" },
    // { id: 3, text: "Winners", link: "/winners" },
    { id: 4, text: "Leaderboard", link: "/leaderboard" },
    { id: 5, text: "Creative Corner", link: "/creativecorner" },
  ],
};

export const footerContent = {
  slogan: `Connecting creators with enterprises.`,
  message01: `Never Miss a Good Opportunity!`,
  message02: `Receive our most important updates in your inbox right away.`,
  action: `Subscribe`,
  links: [
    { id: 1, title: `About us`, link: ``, disabled: true },
    { id: 2, title: `Contact us`, link: "/contact-us", disabled: false },
    { id: 3, title: `Terms and Condition`, link: ``, disabled: true },
    { id: 4, title: `Privacy policy`, link: ``, disabled: true },
    { id: 5, title: `Cookie policy`, link: ``, disabled: true },
  ],
  socials: {
    title: `Follow us on`,
    links: [
      {
        id: 1,
        icon: "/images/icons/facebook.svg",
        link: `https://www.facebook.com/eyedias.co/`,
      },
      {
        id: 2,
        icon: "/images/icons/instagram.svg",
        link: `https://www.instagram.com/eyedias_/`,
      },
      {
        id: 3,
        icon: "/images/icons/linkedin.svg",
        link: `https://www.linkedin.com/company/eyedias`,
      },
    ],
  },
};