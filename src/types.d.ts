export interface Show {
  id: number;
  name: string;
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
  };
  summary: string;
}

interface ShowPreview {
  id: number;
  name: string;
}

export interface ShowApi {
  show: {
    id: number;
    name: string;
    rating: {
      average: number | null;
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
  };
}

