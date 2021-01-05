import './App.css'
import { Provider } from 'react-redux';
// BrowserRouter as Router,
import { HashRouter as Router ,Switch, Route } from 'react-router-dom';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Body from './components/body/body'
import theme from './components/theme/theme'
import Grid from '@material-ui/core/Grid'
import store from './redux/store'
import { ThemeProvider } from '@material-ui/core/styles';
import { FullMovieInfo } from './components/Movies';
import Person from './components/Person/Person';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Grid container direction='column'>
            <Router>
              <Grid item>
                <Header></Header>
              </Grid>
              <Grid item>
                <Switch>
                  <Route exact path={["/","/home"]} component={Body} />               
                  <Route path="/movie/:movieId" render={(props) => <FullMovieInfo {...props} />} />
                  <Route path="/person/:personId" render={(props) => <Person {...props} />} />
                </Switch>
              </Grid>
              <Grid item>
                <Footer></Footer>
              </Grid>
            </Router>
          </Grid>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
