import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Blog = {
  title?: string;
  content?: string;
  eyecatch?: MicroCMSImage;
  category: (MicroCMSListContent & Category) | null;
};

export type Category = {
  name?: string;
};
