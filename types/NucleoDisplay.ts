export type NucleoElement = {
   element: string;
   isotopes: number[];
   stable: number[];
   exclude?: number[];
};

export type NucleoIsotope = {
   element: string;
   isotope: number;
   proton: number;
   stable: boolean;
};

export type NucleoSquare = {
   row: number;
   col: number;
   props: NucleoIsotope;
};

export type SquareSize = {
   square: number;
   gap: number;
   border: number;
   mainText: string;
   subText: string;
   subMargin: number;
};

export type Squares = {
   squares: NucleoSquare[];
   squareSize: SquareSize;
};
