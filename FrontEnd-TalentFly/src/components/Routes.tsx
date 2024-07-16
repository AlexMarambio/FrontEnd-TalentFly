import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminPage from '../AdminPage'
import App from '../App'

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/admin" component={AdminPage} />
            </Switch>
        </Router>
    );
};

export default Routes;