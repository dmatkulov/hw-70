export interface Show {
  id: string;
  name: string;
  rating: number | null;
  image: string;
  summary: string;
  genres: string[];
  officialSite: string
}

export interface Shows {
  id: number;
  name: string;
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
  };
  summary: string;
  genres: string[];
  officialSite: string;
}

interface ShowPreview {
  id: string;
  name: string;
}

export interface ShowApi {
  show: {
    id: number;
    name: string;
  };
}

