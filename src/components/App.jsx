import { AppStyled } from "./App.styled"
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery"
import { fetchImages } from "../utils/service";
import { Component } from "react";
import { Dna } from 'react-loader-spinner'

export class App extends Component {
  state = {

    images: [],
    query: '',
    page: 1,
    isLoading: false
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
    this.setState (({isLoading})=> ({isLoading:!isLoading}))
    fetchImages(query).then(data => {
      const results = data.hits.map(image => ({ tags: image.tags, id: image.id, smallImage: image.webformatURL, largeImage: image.largeImageURL }))
      if (!data.totalHits) {
        alert('There are no images for your request')
      }
      return this.setState({
        page: 1,
        images: results,
        totalHits: data.totalHits
      })
    }
    ).catch(error => console.error(error)).finally(()=> this.setState (({isLoading})=> ({isLoading:!isLoading})));
  }
  }
  
  submitHandler = (query) => {
    this.setState({
      query
    })
  }

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.submitHandler}></Searchbar>{this.state.isLoading && <Dna wrapperStyle = {{margin: '0 auto'}}/>}
        <ImageGallery images={this.state.images}></ImageGallery>
        
        
        <Button />
      </AppStyled>
    );
  }
};


