export interface ThemeInterface {
  background: string;
  color_01: string;
  color_02: string;
  color_03: string;
  color_04: string;
  color_05: string;
  color_06: string;
  color_07: string;
  color_08: string;
  color_09: string;
  color_10: string;
  color_11: string;
  color_12: string;
  color_13: string;
  color_14: string;
  color_15: string;
  color_16: string;
  cursor: string;
  foreground: string;
  hash: string;
  name: string;
}

export interface IMappedTheme {
  [key: string]: string | null;
}

export const mapTheme = (variables: ThemeInterface): IMappedTheme => {
  return {
    '--color-color_01': variables.color_01 || '',
    '--color-color_02': variables.color_02 || '',
    '--color-color_03': variables.color_03 || '',
    '--color-color_04': variables.color_04 || '',
    '--color-color_05': variables.color_05 || '',
    '--color-color_06': variables.color_06 || '',
    '--color-color_07': variables.color_07 || '',
    '--color-color_08': variables.color_08 || '',
    '--color-color_09': variables.color_09 || '',
    '--color-color_10': variables.color_10 || '',
    '--color-color_11': variables.color_11 || '',
    '--color-color_12': variables.color_12 || '',
    '--color-color_13': variables.color_13 || '',
    '--color-color_14': variables.color_14 || '',
    '--color-color_15': variables.color_15 || '',
    '--color-color_16': variables.color_16 || '',
    '--color-background': variables.background || '',
    '--color-foreground': variables.foreground || '',
    name: variables.name || '',
  };
};
