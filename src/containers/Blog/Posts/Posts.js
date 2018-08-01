import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
        selectedId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
        .then( res => {
              const posts = res.data.slice(0,4);
              const updatedPosts = posts.map( post => {
                  return {
                      ...post,
                      author: 'Pravin'
                  }
              });
              this.setState({ posts: updatedPosts });
          })
        .catch( error => {
              this.setState({ error: true })
          }
        );
    }

    clickPostHandler(id) {
      this.props.history.push('/post/' + id);
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something Went Wrong!!</p>
        if(!this.state.error) {
            posts = this.state.posts.map( post => {
              return (
                  <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.clickPostHandler(post.id)} />);
            });
        }
        return(
          <div>
            <section className="Posts">
                {posts}
            </section>
            <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
          </div>
        )
    }
}

export default Posts;
