import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class Movies extends Component {
  state = {movies: []};

  // this is executed onload
  componentDidMount() {
    this.setState({
      movies: [
        {id: 1, title: "Movie Title 1", runtime: 142},
        {id: 2, title: "Another Movie Title", runtime: 92},
        {id: 3, title: "Awesome Movie Title", runtime: 212},
      ]
    })
  }

  render() {
    return (
      <Fragment>
        <h2>Choose a movie</h2>

        <ul>
          {this.state.movies.map((m) => (
            <li key={m.id}>
              <Link to={`/movies/${m.id}`}>{m.title}</Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
