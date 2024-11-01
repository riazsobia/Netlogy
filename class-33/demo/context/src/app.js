import logo from './logo.svg';
import './app.css';
import Main from './main';
import ThemeProvider from './context/themeContext';
import SettingsProvider from './context/settingsContext';

function App() {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default App;
