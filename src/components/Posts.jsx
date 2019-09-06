import React from 'react';
import '../App.css';
import objeto from '../posts.json';
import Post from './Post';
import Axios from 'axios';

class Posts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts : [],
            titulo: "",
            url: ""
        }

        Axios.get("http://www.mocky.io/v2/5d7193e0330000f7cf7799a1").then((result => {
          this.setState(
            {posts: result.data.posts})
          })
        )
        

        this._excluirPost = this._excluirPost.bind(this)
    }
  
    // http://www.mocky.io/v2/5d7193e0330000f7cf7799a1

        _excluirPost(id){
          var posts = this.state.posts.filter( (post) => {
            return post.id != id;
          })
          this.setState({posts})  
        }

        _salvarPost(){
          var posts = this.state.posts
          var newId = this.state.posts[this.state.posts.length-1].id + 1 

          var newPost = {
              titulo: this.state.titulo,
              url: this.state.url,
              id: newId
          }
          posts.push(newPost)
          this.setState({posts})

          this.setState({
            posts:posts,
            titulo:"",
            url:""
          })
        }
  
  
        render(){
          return(
            <div className="App border">
                <div className="row">
                {
                  
                    this.state.posts.map( (posts, i) => (
                      <div className="col-6">
                        <Post 
                          _excluirPost = {this._excluirPost}
                          _salvarPost = {this._salvarPost}
                          key={i}
                          id={posts.id}
                          url_imagem={posts.url}
                          titulo={posts.titulo}
                        />
                      </div>
                    )
                  )
                }
             </div>

             <div className="flex form-group">
                <div className="text-center">
                    <label for="titulo">Titulo</label>
                    <input value={this.state.titulo} onChange={ (e) => {
                      this.setState({titulo: e.target.value})
                    }} name="titulo" id="titulo" className="form-control" />
                </div>

                <div>
                    <label for="url">URL: </label>
                    <input value={this.state.url} onChange={ (e) => {
                      this.setState({url: e.target.value})
                      // console.log(e.target.value)
                    }} name="url" id="url" className="form-control"/>
                </div>
                
                <div className="pt-2">
                    <button className="btn btn-primary" onClick={ () => { this._salvarPost() } }>Salvar</button>
                </div>
                    
            </div>
          </div>
          )
        }
    }
  
  
  export default Posts;
  