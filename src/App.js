import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./components/home";
import Post from "./components/post";
import Profile from "./components/profile";
import PostItem from "./components/postitem";
import Header from "./components/header";

const App = () => {
    return (
        <BrowserRouter> {/* <HashRouter> : Adds # before every route || <MemoryRouter> : Saves all the routes to memory but not visible changes shown in uri */}
            <Header />
            <div className="container">
                <Switch>
                    {/*<Redirect from={'/profile'} to={'/'}/>*/}
                    <Route path="/posts/:id" component={PostItem}/>
                    <Route path="/posts" component={Post}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/" exact component={Home}/>

                    <Route render={() => {
                        return (
                            <h3>Oops! Page not found!!!</h3>
                        );
                    }} />
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
