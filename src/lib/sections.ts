export const sections = ['about', 'education', 'experience', 'projects', 'contact'] as const;

export type SectionId = (typeof sections)[number];
