import localFont from "next/font/local";
import {
  Inter,
  Livvic,
  Manrope,
  Geist,
  Atkinson_Hyperlegible,
} from "next/font/google";

const NeueMontreal = localFont({
  src: [
    { path: "../public/fonts/Neue/NeueMontreal-Regular.otf", weight: "400" },
    { path: "../public/fonts/Neue/NeueMontreal-Medium.otf", weight: "500" },
  ],
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const livvic = Livvic({
  weight: ["600"],
  subsets: ["latin"],
});

const manrope = Manrope({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const geist = Geist({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const atkinson = Atkinson_Hyperlegible({
  weight: ["400"],
  subsets: ["latin"],
});

export { NeueMontreal, inter, livvic, manrope, geist, atkinson };
