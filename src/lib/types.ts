export type SiteData = {
  availablity_date: string;
};

export type WorkData = {
  id: string;
  title: string;
  details: {
    description: string;
    summary: string;
  };
  date: string;
  roles: string[];
  links: {
    type: "web" | "android" | "ios" | undefined;
    text: string;
    text2: string;
    link: string;
    link2: string;
  }[];
}[];
