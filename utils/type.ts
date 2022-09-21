export interface NavHeaderData {
  id: number;
  title: string;
}

export interface SkillsData {
  id: number;
  title: string;
  icon: string;
  color: string;
  time: string;
}

export interface ProjectsData {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  category: string;
  tech: string;
  code: string;
  website: string;
}

export interface FooterData {
  id: number;
  logo: string;
  url: string;
}

export interface HomeData {
  header_data: NavHeaderData[];
  skills_header_data: NavHeaderData[];
  frontend_skills_data: SkillsData[];
  backend_skills_data: SkillsData[];
  global_skills_data: SkillsData[];
  projects_data: ProjectsData[];
  footer_data: FooterData[];
}
