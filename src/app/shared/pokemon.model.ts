export interface Pokemon {
  id: number;
  name: string;
  description: string;
  url?: string;
  base_experience?: number;
  height?: number;
  is_default?: boolean;
  order?: number;
  weight?: number;
  types?: Type[];
  species?: {
    name: string;
    url: string;
  };
}
export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
