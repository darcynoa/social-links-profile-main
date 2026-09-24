export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  location: string;
  bio: string;
  links: SocialLink[];
};

export const profile: Profile = {
  name: "Jessica Randall",
  location: "London, United Kingdom",
  bio: "Front-end developer and avid reader.",
  links: [
    { label: "GitHub", href: "#" },
    { label: "Frontend Mentor", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};