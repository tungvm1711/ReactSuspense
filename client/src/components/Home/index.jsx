import React from 'react';
import axios from 'axios';
import MovieItem from '../../components/MovieItem';
import { connect } from 'react-redux';

import Request from 'react-http-request';

class Home extends React.Component {
constructor() {
 super();
 this.state = {
   userList: []
 };
}

componentWillMount() {

}

getAddress (id) {
 return this.http.get("../../components/movie.json")
 .map(res => res.json());
 }

 renderList() {
  let movieData = this.props.skills.home;
   return movieData.map((movies) => {
     return (
       <MovieItem
         id={movies.id}
         title={movies.title}
         rating={movies.ratings.critics_score}
       />
     );
   });
}

  render() {
  console.log(this.props.skills.home);
    return (
      <div className="container">
        <h1>The Movies Blog</h1>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    skills: state,
  };
}

export default connect(mapStateToProps)(Home);
