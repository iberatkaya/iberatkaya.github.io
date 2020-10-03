import { Links } from "./links";

export interface Project {
  title: string;
  projectType: string;
  body: string;
  date: string;
  code?: string;
  codeLang?: string;
  image?: string[];
  imagePadding?: string;
  links?: Links;
}
