// data.ts
export interface TableData {
  title: string;
  rows: { label: string; value: string }[];
}

export const tableDataArray: TableData[] = [
  {
    title: "Early-Bird (Upto 15th April, 2025)",
    rows: [
      { label: "Delegates", value: "Rs. 6000/-" },
      { label: "Spouses & Accompanying Persons", value: "Rs. 3000/-" },
      { label: "Senior Citizen", value: "Free" },
      { label: "PG Students", value: "Rs. 5000/-" },
    ],
  },
  {
    title: "Standard (Upto 15th April, 2025)",
    rows: [
      { label: "Delegates", value: "Rs. 6500/-" },
      { label: "Spouses & Accompanying Persons", value: "Rs. 3500/-" },
      { label: "Senior Citizen", value: "Free" },
      { label: "PG Students", value: "Rs. 5500/-" },
    ],
  },
  {
    title: "Late-Bird (Upto 30th Sept, 2025)",
    rows: [
      { label: "Delegates", value: "Rs. 7000/-" },
      { label: "Spouses & Accompanying Persons", value: "Rs. 4000/-" },
      { label: "Senior Citizen", value: "Free" },
      { label: "PG Students", value: "Rs. 6000/-" },
    ],
  },
  {
    title: "On-the-Spot Registration",
    rows: [
      { label: "Delegates", value: "Rs. 8000/-" },
      { label: "Spouses & Accompanying Persons", value: "Rs. 4500/-" },
      { label: "Senior Citizen", value: "Free" },
      { label: "PG Students", value: "Rs. 7000/-" },
    ],
  },
];
