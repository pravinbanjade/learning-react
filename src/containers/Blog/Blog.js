import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <nav>
                    <ul>
                        <li><NavLink to="/post" exact>Home</NavLink></li>
                        <li><NavLink to="/new-post">New Post</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                  <Route path="/new-post" exact component={AsyncNewPost} />
                  <Route path="/post" component={Posts} />
                  <Route render={ () => <h1>Not Found!!</h1> } />
                </Switch>
            </div>
        );
    }
}

export default Blog;
