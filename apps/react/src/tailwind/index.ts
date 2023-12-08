// Resolve tailwind config here
import type { Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig";
// @ts-ignore
import config from "tailwind.config.js";

export const fullConfig = resolveConfig(config) as Config;

type Breakpoints = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
};

export const breakpoints = fullConfig.theme?.screens as Breakpoints;
export const colors = fullConfig.theme?.colors as any;
