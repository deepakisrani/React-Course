import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import history from '../history';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

class App extends React.Component {

    // If you have a component outside BrowserRouter, it will be shown 100% of the time (provided it doesn't use any Router related components)
    // BrowserRouter ignores the history prop. Plain Router can use custom history
    // Switch shows only one of the route that matches, in order to avoid clashes of /new and /:id
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={StreamList} />
                            <Route path="/streams/new" exact component={StreamCreate} />
                            <Route path="/streams/edit/:id" exact component={StreamEdit} />
                            <Route path="/streams/delete/:id" exact component={StreamDelete} />
                            <Route path="/streams/:id" exact component={StreamShow} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;