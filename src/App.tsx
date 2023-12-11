import { Terminal } from '@components/Terminal.tsx';
import Layout from '@components/Layout.tsx';
import { applyTheme } from '@functions/applyTheme.ts';
import { DEFAULT_THEME } from '@configs/allThemes.ts';
import { getStorage } from '@functions/getStorage.ts';

function App() {
  if (getStorage('user-theme')) {
    applyTheme(getStorage('user-theme'));
  } else {
    applyTheme(DEFAULT_THEME);
  }

  return (
    <Layout>
      <Terminal />
    </Layout>
  );
}

export default App;
