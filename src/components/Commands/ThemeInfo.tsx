import { getStorage } from '@functions/getStorage.ts';
import { getThemes } from '@functions/getThemes.ts';

const ThemeInfo = (args: string[]) => {
  if (args.length > 0) return <p>theme: {args.join(' ')} is not valid</p>;

  const currentTheme = getThemes().get(getStorage('user-theme'));

  return (
    <div
      className='mb-3 mt-1'
      data-testid='themeinfo'
    >
      <p className='font-bold leading-6 text-foreground'>
        Name: {currentTheme?.name}
      </p>
      <p className='font-bold leading-6 text-foreground'>
        foreground: {currentTheme?.foreground}
      </p>
      <p className='font-bold leading-6 text-background'>
        background: {currentTheme?.background}
      </p>
      <p className='font-bold leading-6 text-color_01'>
        Color_01: {currentTheme?.color_01}
      </p>
      <p className='font-bold leading-6 text-color_02'>
        Color_02: {currentTheme?.color_02}
      </p>
      <p className='font-bold leading-6 text-color_03'>
        Color_03: {currentTheme?.color_03}
      </p>
      <p className='font-bold leading-6 text-color_04'>
        Color_04: {currentTheme?.color_04}
      </p>
      <p className='font-bold leading-6 text-color_05'>
        Color_05: {currentTheme?.color_05}
      </p>
      <p className='font-bold leading-6 text-color_06'>
        Color_06: {currentTheme?.color_06}
      </p>
      <p className='font-bold leading-6 text-color_07'>
        Color_07: {currentTheme?.color_07}
      </p>
      <p className='font-bold leading-6 text-color_08'>
        Color_08: {currentTheme?.color_08}
      </p>
      <p className='font-bold leading-6 text-color_09'>
        Color_09: {currentTheme?.color_09}
      </p>
      <p className='font-bold leading-6 text-color_10'>
        Color_10: {currentTheme?.color_10}
      </p>
      <p className='font-bold leading-6 text-color_11'>
        Color_11: {currentTheme?.color_11}
      </p>
      <p className='font-bold leading-6 text-color_12'>
        Color_12: {currentTheme?.color_12}
      </p>
      <p className='font-bold leading-6 text-color_13'>
        Color_13: {currentTheme?.color_13}
      </p>
      <p className='font-bold leading-6 text-color_14'>
        Color_14: {currentTheme?.color_14}
      </p>
      <p className='font-bold leading-6 text-color_15'>
        Color_15: {currentTheme?.color_15}
      </p>
      <p className='font-bold leading-6 text-color_16'>
        Color_16: {currentTheme?.color_16}
      </p>
    </div>
  );
};

export default ThemeInfo;
