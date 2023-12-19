export interface Show {
  id: number;
  name: string;
  rating: Record<string, number>;
  image: Record<string, string>;
  summary: string;
}

export interface ShowPreview {
  id: number;
  name: string;
}

export type ShowApi = Omit<Show, 'id'>;

export interface ShowsList {
  [id: string]: ShowApi;
}


