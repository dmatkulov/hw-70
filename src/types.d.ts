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

export type ShowPreview = Omit<Show, 'rating' | 'image' | 'summary'>