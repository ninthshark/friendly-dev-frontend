export type Project = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  body: string; // Optional for listing, required for details
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiProject = {
  id: string;
  title: string;
  description: string;
  image?: {
    url: string;
    format?: {
      thumbnail?: {
        url: string;
      };
      small?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      large?: {
        url: string;
      };
    };
  };
  url: string;
  date: string;
  category: string;
  featured: boolean;
  documentId: string;
};

export type StrapiPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  body: string;
  documentId: string;
  image?: {
    url: string;
    format?: {
      thumbnail?: {
        url: string;
      };
      small?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      large?: {
        url: string;
      };
    };
  };
};
