import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
    state = {
        show: null
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then((response)=> response.json())
        .then(json => this.setState({ show: json }))
    }
    render() { 
        const { show } = this.state;
        return (
            <div>
                {show === null && <Loader /> }
                {
                    show !== null
                    &&
                    <div>
                    <p>{show.name}</p> 
                    <p>{show.premiered}</p> 
                    <p>{show.rating.average}</p> 
                    <p>{show._embedded.episodes.length}</p>
                    <p><img alt="show" src={show.image.medium} /></p>   </div>
                }
            </div>
          );
    }
}
 
export default SingleSeries;