import { Terminal } from '@components/Terminal.tsx';
import Layout from '@components/Layout.tsx';
import { applyTheme } from '@functions/applyTheme.ts';
import { DEFAULT_THEME } from '@configs/allThemes.ts';
import { getStorage } from '@functions/getStorage.ts';
import { saveStorage } from '@functions/saveStorage.ts';

function App() {
  if (getStorage('theme')) {
    applyTheme(getStorage('theme'));
  } else {
    applyTheme(DEFAULT_THEME);
    saveStorage('theme', DEFAULT_THEME);
  }

  return (
    <Layout>
      <Terminal />
    </Layout>
  );
}

export default App;
