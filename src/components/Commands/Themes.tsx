import { getThemes } from '@functions/getThemes.ts';
import { type ThemeInterface } from '@interfaces/themeInterface.ts';
import { applyTheme } from '@functions/applyTheme.ts';
import { themeExists } from '@functions/themeExists.ts';
import { saveStorage } from '@functions/saveStorage.ts';

const Theme = (themeObject: { themeKey: string; theme: ThemeInterface }) => {
  return (
    <tr>
      <td>{themeObject.theme.name}</td>
      <td className='w-12 text-center'>-</td>
      <td>{themeObject.themeKey}</td>
    </tr>
    /*    <div>
      <p className='ml-5'>
        {themeObject.theme.name} - {themeObject.themeKey}
      </p>
    </div>*/
  );
};

const Themes = (args: string[]) => {
  /* if (args.length !== 1) return <p>themes: {args.join(' ')} is not valid</p>;*/
  if (args.length < 1)
    return (
      <div>
        <p>themes: {args.join(' ')} is not valid</p>
        <p>Try 'ls' or 'set [themeName]'</p>
      </div>
    );

  const themes = Array.from(getThemes(), ([themeKey, theme]) => {
    return { themeKey: themeKey, theme: theme };
  });

  if (args[0] === 'ls')
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
        {/*        <p className='ml-5'>Available Themes:</p>
        <div className='mb-5 ml-5'>----</div>
        {themes.map((themeObject, index) => {
          return (
            <Theme
              key={index}
              {...themeObject}
            />
          );
        })}*/}
      </div>
    );

  if (args[0] === 'set' && themeExists(args[1])) {
    applyTheme(args[1]);
    saveStorage('theme', args[1]);
  } else {
    return <p>themes: {args.join(' ')} is not valid</p>;
  }
};

export default Themes;
