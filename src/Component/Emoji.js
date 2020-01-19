import React from 'react';
import Data from './EmojiList.json';
import './Emoji.css'

class Filter extends React.Component {
	constructor () {
		super ();
		this.state = {emoji_find : ''}	
		}
	
	
    handleChange = (event) => {
		this.setState({
			emoji_find: event.target.value
		});
	}
	
   render() {
		const {emoji_find} = this.state;

		const filteredEmoji = Data.filter( emoji_search =>  {
			if (emoji_search.title.toLowerCase().indexOf(emoji_find.toLowerCase()) !== -1){
				return true;
			}
			if (emoji_search.symbol.toLowerCase().indexOf(emoji_find.toLowerCase()) !== -1){
				return true; 
			}	
			return false;
		});

	return (
		<div>
			<div className="search_input">
				<input className="input" type="text" placeholder="Search for......" onChange={this.handleChange} />
			</div>
		<div> 

		<div className="line">
			<hr></hr>
		</div> 

		{filteredEmoji.slice(0,20).map(function(emoji_find,index){
		return <div key={index} className="itmes">
				<span className="emoji">{emoji_find.symbol} {emoji_find.title}
                <span className="emoji_copy" onClick={()=>this.copyToClipboard(emoji_find.symbol)}>Click to Copy Emoji</span>
				{/* <span className="emoji-title">{emoji_find.title}</span> */}
				</span>
			</div>
            })}
		</div>
		</div>
	)}		
}
export default Filter;