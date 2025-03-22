import { Poppins } from "next/font/google";
import { Forum } from "next/font/google";

export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
export const forum = Forum({ subsets: ["latin"], weight: "400" });
