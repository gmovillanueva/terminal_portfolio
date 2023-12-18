import { getStorage } from '@functions/getStorage.ts';
import { getThemes } from '@functions/getThemes.ts';
import {
  IMappedTheme,
  mapThemeInfo,
  type ThemeInterface,
} from '@interfaces/themeInterface.ts';
import { applyTheme } from '@functions/applyTheme.ts';
import { themeExists } from '@functions/themeExists.ts';
import { saveStorage } from '@functions/saveStorage.ts';
import { themes } from '@configs/allThemes.ts';

const Theme = (themeObject: { themeKey: string; theme: ThemeInterface }) => {
  return (
    <tr>
      <td>{themeObject.theme.name}</td>
      <td className='w-12 text-center'>-</td>
      <td>{themeObject.themeKey}</td>
    </tr>
  );
};

const Themes = (args: string[]) => {
  /* if (args.length !== 1) return <p>themes: {args.join(' ')} is not valid</p>;*/
  if (args.length < 1)
    return (
      <div>
        <p>Usage: theme [args]</p>
        <p>Try 'ls' to view available themes.'</p>
        <p>Try 'set [themeName]' to change theme.</p>
        <p>Try 'info [themeName]' for information about available themes.</p>
      </div>
    );

  if (args[0] === 'info') {
    let themeArg = '';
    if (!args[1]) {
      themeArg = getStorage('theme');
    } else if (themeExists(args[1])) {
      themeArg = args[1];
    } else {
      return <p>theme: {args.join(' ')} is not a valid command.</p>;
    }

    const themeObject: IMappedTheme = mapThemeInfo(themes[themeArg]);
    if (!themeObject) return;

    return (
      <div
        className='mb-3 ml-5 mt-1'
        data-testid='themeinfo'
      >
        <table className='ml-5 table-fixed'>
          <thead>
            <tr>
              <th className='text-left'>Property Name</th>
              <th>-</th>
              <th className='text-left'>Property Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(themeObject).map((property, propertyIndex) => {
              const classWrapper =
                `font-bold leading-6 text-` + property.toLowerCase();
              return (
                <tr
                  key={propertyIndex}
                  className={classWrapper}
                >
                  <td>{property}</td>
                  <td className='w-12 text-center'>-</td>
                  <td>{themeObject[property]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  if (args[0] === 'ls') {
    const themes = Array.from(getThemes(), ([themeKey, theme]) => {
      return { themeKey: themeKey, theme: theme };
    });

    return (
      <div>
        <table className='ml-5 table-fixed'>
          <thead>
            <tr>
              <th className='text-left'>Theme Name</th>
              <th>-</th>
              <th className='text-left'>Theme Command</th>
            </tr>
          </thead>
          <tbody>
            {themes.map((themeObject, index) => {
              return (
                <Theme
                  key={index}
                  {...themeObject}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  if (args[0] === 'set' && themeExists(args[1])) {
    applyTheme(args[1]);
    saveStorage('theme', args[1]);
  } else {
    return <p>themes: {args.join(' ')} is not a valid command.</p>;
  }
};

export default Themes;
