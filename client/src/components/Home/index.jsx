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

  render() {
  console.log(this.props.skills);
    return (
      <div className="container">
        <h1>The Movies Blog</h1>
        <MovieItem />
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
