import React from 'react';


//uncontrolled element

// class SearchBar extends React.Component{
//     onInputChange(event){
//         console.log(event.target.value);
//     }

//     render(){
//         return (
//             <div className='ui segment'>
//                 <form className="ui form">
//                     <div className='field'>
//                     <label>Image Search</label>
//                     <input 
//                         type="text"
//                         onChange={this.onInputChange}/>
//                     {/* <input type="text" onChange={(e) => console.log(e.target.value)}/> */}
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

//controlled element
class SearchBar extends React.Component{
    state = {term : ''};

    onFormSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmitting (this.state.term);
    }
    render(){
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className='field'>
                    <label>Image Search</label>
                    <input 
                        type="text"
                        value={this.state.term}
                        onChange={(e) => 
                            this.setState({term : e.target.value})
                        }
                    />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;