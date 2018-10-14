import React from 'react';
import MovieItem from '../../components/MovieItem';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>The Movies Blog</h1>
        <MovieItem />
        <MovieItem />
      </div>
    );
  }
}

export default Home;
