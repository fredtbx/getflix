import React from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import Trailer from '../Trailer/Trailer';
import NotFound from '../elements/NotFound/NotFound';

const App = () => {
  return ( 
    <BrowserRouter basename="/getflix/">
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route path="/trailer/:movieId" component={Trailer} exact strict />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App;