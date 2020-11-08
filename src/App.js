import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

function App() {
    return (
        <div className="app__container">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
