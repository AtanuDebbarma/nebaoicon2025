import { assetUrl } from "../src/assets/data/assetUrl";

export interface CommitteeMember {
  row: number;
  imageSrc: string;
  textHeader: string;
  textSubHeader1: string;
  textSubHeader2?: string;
}

export const committeeData: CommitteeMember[] = [
  {
    row: 2,
    imageSrc: assetUrl.sankarChakraborty_2,
    textHeader: "Dr. Sankar Chakraborty",
    textSubHeader1: "Organizing President",
  },
  {
    row: 2,
    imageSrc: assetUrl.bidhanDas_3,
    textHeader: "Dr. Bidhan Das",
    textSubHeader1: "Organizing Secretary",
  },
  {
    row: 2,
    imageSrc: assetUrl.satyakamChak_4,
    textHeader: "Dr. Satyakam Chakraborty",
    textSubHeader1: "Joint Secretary",
  },
  {
    row: 3,
    imageSrc: assetUrl.laxmanBhatt_5,
    textHeader: "Dr. Laxman Bhattacharjee",
    textSubHeader1: "Joint Secretary",
  },
  {
    row: 3,
    imageSrc: assetUrl.bishanathDas_6,
    textHeader: "Dr. Biswanath Das",
    textSubHeader1: "Treasurer",
  },
  {
    row: 3,
    imageSrc: assetUrl.biplabNath_7,
    textHeader: "Prof.(Dr.) Biplab Nath",
    textSubHeader1: "Chairman Scientific Committee",
  },
  {
    row: 4,
    imageSrc: assetUrl.prabrataSinha_8,
    textHeader: "Dr. Priyabrata Sinha",
    textSubHeader1: "Chairman, Event",
    textSubHeader2: "Management Committee",
  },
  {
    row: 4,
    imageSrc: assetUrl.tarunGuha_9,
    textHeader: "Dr. Tarun Guha",
    textSubHeader1: "Chairman, Invitation and",
    textSubHeader2: "Hospitality Committee",
  },
  {
    row: 4,
    imageSrc: assetUrl.tanoyDeb_10,
    textHeader: "Dr. Tanmoy Deb",
    textSubHeader1: "Chairman, Souvenir and",
    textSubHeader2: "Journal Committee",
  },
  {
    row: 5,
    imageSrc: assetUrl.sankarSarkar_11,
    textHeader: "Dr. Sankar Sarkar",
    textSubHeader1: "Chairman Refreshment Committee",
  },
  {
    row: 5,
    imageSrc: assetUrl.sutapBhattacharjee_12,
    textHeader: "Dr. Sutap Bhattacharjee",
    textSubHeader1: "Chairman, Cultural Committee",
  },
  {
    row: 5,
    imageSrc: assetUrl.karnajitDebroy_13,
    textHeader: "Dr. Karnajit Debroy",
    textSubHeader1: "Chairman, Transportation Committee",
  },
];
