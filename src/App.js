import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import GlobalStyles from './components/styles/Globals';

const theme = {
  colors: {
    darkGrey: '#1A1A1D',
    burgundy: '#6F2232',
    lilac: '#950740',
    rose: '#C3073F',
    grey: '#4E4E50',
    lightPink: '#fefcfd',
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Landing />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
