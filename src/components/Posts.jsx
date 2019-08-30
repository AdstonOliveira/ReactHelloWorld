import React from 'react';
import '../App.css';
import objeto from '../posts.json';
import Post from './Post';

class Posts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts : objeto.posts
        }
        this._excluirPost = this._excluirPost.bind(this)
    }
  
        _excluirPost(id){
          var posts = this.state.posts.filter( (post) => {
            return post.id != id;
          })
          this.setState({posts})  
        }
  
  
        render(){
          return(
            <div className="App row">
            {
                this.state.posts.map( (posts, i) => 
                <Post 
                  _excluirPost = {this._excluirPost}
                  key={i}
                  id={posts.id}
                  url_imagem={posts.url}
                  titulo={posts.titulo}
                />
                )
            }
            </div>
          )
        }
    }
  
  
  export default Posts;
  