import React from 'react';
import '../App.css';
import objeto from '../components/Posts';


class Post extends React.Component{
  render(){
    return(
    <div className="border p-1">
      <div className="p-1">
        <img className="img1" src={this.props.url_imagem} />
          <div>Titulo: {this.props.titulo} </div>
          <button className="btn btn-primary" onClick={ () => this.props._excluirPost(this.props.id)} >Excluir-me</button>
      </div>
    </div>
    )
  }  

}
export default Post;
