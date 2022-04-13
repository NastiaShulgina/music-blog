import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import GlobalStyles from './components/styles/Globals';
import Catalog from './components/Catalog';
import ToListen from './components/ToListen';
import SongDetails from './components/SongDetails';

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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/catalog">
            <Catalog />
          </Route>
          <Route exact path="/catalog/:id">
            <SongDetails />
          </Route>
          <Route path="/to-listen">
            <ToListen />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
