import { getThemes } from '@functions/getThemes.ts';
import { type ThemeInterface } from '@interfaces/themeInterface.ts';
import { applyTheme } from '@functions/applyTheme.ts';
import { themeExists } from '@functions/themeExists.ts';
import { saveStorage } from '@functions/saveStorage.ts';

const Theme = (themeObject: { themeKey: string; theme: ThemeInterface }) => {
  return (
    <div>
      <p>
        {themeObject.theme.name} - {themeObject.themeKey}
      </p>
    </div>
  );
};

const Themes = (args: string[]) => {
  /* if (args.length !== 1) return <p>themes: {args.join(' ')} is not valid</p>;*/
  if (args.length < 1) return <p>themes: {args.join(' ')} is not valid</p>;

  const themes = Array.from(getThemes(), ([themeKey, theme]) => {
    return { themeKey: themeKey, theme: theme };
  });

  if (args[0] === 'ls')
    return (
      <div>
        <p>Available Themes:</p>
        {themes.map((themeObject, index) => {
          return (
            <Theme
              key={index}
              {...themeObject}
            />
          );
        })}
      </div>
    );

  if (args[0] === 'set' && themeExists(args[1])) {
    applyTheme(args[1]);
    saveStorage('user-theme', args[1]);
  } else {
    return <p>themes: {args.join(' ')} is not valid</p>;
  }
};

export default Themes;
