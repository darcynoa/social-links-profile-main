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
