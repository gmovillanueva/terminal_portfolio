import { themes } from '@configs/allThemes.ts';

export const getThemes = () => {
  return new Map(Object.entries(themes));
};
