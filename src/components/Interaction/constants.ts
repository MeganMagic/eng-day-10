export type Device = "MOBILE" | "TABLET" | "DESKTOP" | "WIDE";

// ** color **
export type P5Color = {
  hex: string;
  rgb: {
    r: number;
    g: number;
    b: number;
  };
};

export const KEY_COLOR: P5Color = {
  hex: "#452CDD",
  rgb: { r: 69, g: 44, b: 221 },
};

export const BG_COLOR: P5Color = {
  hex: "#000000",
  rgb: { r: 0, g: 0, b: 0 },
};

// ** value **
export type InteractionFixedValue = {
  boxWidth: number;
  boxHeight: number;
  xMax: number;
  yMax: number;
  radius: number;
  padding: number;
  pivotGap: number;
  edgeLength: number;
  velocity: number;
};

export const MOBILE_VALUE: InteractionFixedValue = {
  boxWidth: 375,
  boxHeight: 615,
  xMax: 3,
  yMax: 5,
  radius: 20,
  pivotGap: 120,
  padding: 47.5,
  edgeLength: 82,
  velocity: 2,
};

export const TABLET_VALUE: InteractionFixedValue = {
  boxWidth: 700,
  boxHeight: 720,
  xMax: 4,
  yMax: 4,
  radius: 40,
  pivotGap: 180,
  padding: 50,
  edgeLength: 80,
  velocity: 3,
};

export const DESKTOP_VALUE: InteractionFixedValue = {
  boxWidth: 1080,
  boxHeight: 800,
  xMax: 4,
  yMax: 3,
  radius: 60,
  pivotGap: 280,
  padding: 60,
  edgeLength: 78,
  velocity: 5,
};

export const WIDE_VALUE: InteractionFixedValue = {
  boxWidth: 1360,
  boxHeight: 840,
  xMax: 5,
  yMax: 3,
  radius: 60,
  pivotGap: 280,
  padding: 60,
  edgeLength: 78,
  velocity: 5,
};

export const colors = [
  "#452CDD",
  "#452CDD",
  "#452CDD",
  "#452CDD",
  "#452CDD",
  "#412AD1",
  "#3E27C6",
  "#3A25BA",
  "#3623AE",
  "#3320A3",
  "#2F1E97",
  "#2C1C8C",
  "#281980",
  "#241774",
  "#211569",
  "#1D135D",
  "#191051",
  "#160E46",
  "#120C3A",
  "#0F092F",
  "#0B0723",
  "#070517",
  "#04020C",
  "#000000",
];
