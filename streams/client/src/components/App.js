import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return <div>PageOne<br/><Link to="/pagetwo" >Navigate to: Page Two</Link></div>;
}

const PageTwo = () => {
    return <div>PageTwo<br/><Link to="/" >Navigate to: Home</Link></div>;
}

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={PageOne} />
                        <Route path="/pagetwo" component={PageTwo} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;