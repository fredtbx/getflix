import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../config';
import YouTube from 'react-youtube';

import './Trailer.css';

class Trailer extends Component {
  state = {
      loading: false,
      trailer_key: ""
  }
  componentDidMount() {
    this.setState({loading: true})
    //fetch the trailer
    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/videos?api_key=${API_KEY}&language=en-US`;
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) => {
    console.log(endpoint);
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        const trailer_key = result.results[0].key
          
         this.setState({
           trailer_key
         })
       
        console.log(trailer_key)   
      })
  }

  render () {
    const opts = {
      height: '720',
      width: '1280',
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <div className="rmdb-trailer">        
        <div className="rmdb-trailer-container">
          <YouTube
          videoId={this.state.trailer_key}
          opts={opts}
          onReady={this._onReady}
        />
        </div>        
      </div>     
    );
  }
}
export default Trailer;