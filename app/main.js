import React from 'react';
import { render } from 'react-dom';
import Frame from './components/Frame';
import Landing from './components/Landing';
import About from './components/About';
import Speaker from './components/Speaker';
import Contact from './components/Contact';
import { Router, Route, IndexRoute, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const components = Object.freeze({
  frame: Frame,
  landing: Landing,
  topPages: [
    {path: "about",    component: About},
    {path: "speaker",  component: Speaker},
    {path: "contact",  component: Contact}
  ]
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

function routeSet (prefix, lang) {
  var wrapper = (Comp) => (props) => <Comp {...props} lang={lang}>{props.children}</Comp>
  return(
    <Route path={prefix} lang={lang} component={wrapper(components.frame)}>
      <IndexRoute lang={lang} component={wrapper(components.landing)} />
      {components.topPages.map(page =>
        <Route key={page.path} path={page.path} component={wrapper(page.component)} />
      )}
    </Route>);
}

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={hashHistory} render={applyRouterMiddleware(useScroll())} >
          {routeSet ("/", null)}
          {routeSet ("/en", "en")}
          {routeSet ("/zh", "zh")}
        </Router>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('app'));
