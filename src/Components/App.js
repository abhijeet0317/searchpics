import React from 'react';
import unsplash from '../api/UnSplash';
// import axios from 'axios';
import SearchBar from './SearchBar'; 
import ImageList from './ImageList';


class App extends React.Component{

    state = {images : []};
    // onSearchSubmit(term){
    //     axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query : term},
    //         headers: {
    //             Authorization: 'Client-ID r2LP7ktHmeFLx-haRCgV1LjSbVjfu9pSJ9R50gMy6DY'
    //         }
    //     }).then((response)=>{
    //         console.log(response.data.results);
    //     });
    // }
    // onSearchSubmit = async (term) =>{
    //     const response = await axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query : term},
    //         headers: {
    //             Authorization: 'Client-ID r2LP7ktHmeFLx-haRCgV1LjSbVjfu9pSJ9R50gMy6DY'
    //         }
    //     });
    //     // console.log(response.data.results);

    //     // console.log(this);
    //     this.setState({ images: response.data.results});
    // }

    onSearchSubmit = async (term) =>{
        const response = await unsplash.get('https://api.unsplash.com/search/photos',{
            params: {query : term}
        });
        console.log(response.data.results); 
        this.setState({ images: response.data.results});
    }


    render(){
        return (
        <div className='ui container' style={{marginTop : '10px'}}>
           <SearchBar onSubmitting={this.onSearchSubmit} />
           <ImageList images={this.state.images} />
        </div>
        );
    };
}

export default App;   