import { getThemes } from '@functions/getThemes.ts';
import { type ThemeInterface } from '@interfaces/themeInterface.ts';

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
  if (args.length !== 1) return <p>themes: {args.join(' ')} is not valid</p>;

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

  if (args[0] === 'set') {
  }
};

export default Themes;
