export type CatProps = {
  id: number;
  name: string;
  gender: string;
  bio: string;
  date: string;
  month: string;
  year: string;
  image?: string;
};
export interface PopupProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setCats: React.Dispatch<React.SetStateAction<CatProps[]>>;
  cats: CatProps[];
}

export interface CatCardProps {
  cat: CatProps;
  cats: CatProps[];
  setCats: (cats: CatProps[]) => void;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
