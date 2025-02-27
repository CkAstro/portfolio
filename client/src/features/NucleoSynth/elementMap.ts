const range = (start: number, end: number): number[] => {
   let items: number[] = [];
   for (let i = start; i < end + 1; i++) {
      items = items.concat(i);
   }
   return items;
};

export interface NuclearElement {
   element: string;
   isotopes: number[];
   stable: number[];
   exclude?: number[];
}

// reference: https://upload.wikimedia.org/wikipedia/commons/b/b5/NuclideMap_stitched.png
const elementChart: NuclearElement[] = [
   { element: 'Ti', isotopes: range(39, 63), stable: [46, 47, 48, 49, 50] },
   { element: 'Sc', isotopes: range(36, 60), stable: [45], exclude: [38] },
   { element: 'Ca', isotopes: range(34, 57), stable: [42, 43, 44] },
   { element: 'K', isotopes: range(32, 55), stable: [39, 41] },
   { element: 'Ar', isotopes: range(30, 53), stable: [36, 38, 40] },
   { element: 'Cl', isotopes: range(28, 51), stable: [35, 37] },
   {
      element: 'S',
      isotopes: range(26, 49),
      stable: [32, 33, 34, 36],
      exclude: [47],
   },
   { element: 'P', isotopes: range(24, 46), stable: [31] },
   { element: 'Si', isotopes: range(22, 44), stable: [28, 29, 30] },
   { element: 'Al', isotopes: range(21, 42), stable: [27] },
   { element: 'Mg', isotopes: range(19, 40), stable: [24, 25, 26] },
   { element: 'Na', isotopes: range(18, 37), stable: [23], exclude: [36] },
   {
      element: 'Ne',
      isotopes: range(16, 34),
      stable: [20, 21, 22],
      exclude: [33],
   },
   { element: 'F', isotopes: range(14, 31), stable: [19] },
   { element: 'O', isotopes: range(12, 28), stable: [16, 17, 18] },
   { element: 'N', isotopes: range(10, 25), stable: [14, 15] },
   { element: 'C', isotopes: range(8, 22), stable: [12, 13] },
   { element: 'B', isotopes: range(6, 19), stable: [10, 11] },
   { element: 'Be', isotopes: range(5, 16), stable: [9] },
   { element: 'Li', isotopes: range(3, 12), stable: [6, 7] },
   { element: 'He', isotopes: range(3, 10), stable: [3, 4] },
   { element: 'H', isotopes: range(1, 7), stable: [1, 2] },
   { element: 'N', isotopes: range(1, 1), stable: [] },
];

export const elementMap = elementChart
   .map(({ element, isotopes, stable, exclude = [] }, index) => {
      const protons = elementChart.length - index - 1;

      return isotopes.map((isotope) => {
         const neutrons = isotope - protons; // + 1;

         return {
            element,
            protons,
            neutrons,
            isStable: stable.includes(isotope),
            getPosition: (
               size: number,
               width: number,
               height: number
            ): { left: number; top: number } | null => {
               if (exclude.includes(isotope)) return null;
               const top = height - size * (protons + 1);
               const left = size * neutrons;

               return {
                  left,
                  top,
               };
            },
         };
      });
   })
   .flat();
