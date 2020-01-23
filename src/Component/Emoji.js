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

	copyToClipboard = (symbol) => {
		var textField = document.createElement('textarea')
		textField.innerText = symbol
		document.body.appendChild(textField)
		textField.select()
		document.execCommand('copy')
		textField.remove()
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
					<input className="input" type="text" placeholder="Search for Emoji......" onChange={this.handleChange} />
				</div>

				<div className="line">
					<hr></hr>
				</div>

			<div className="emoji-finder">
				{filteredEmoji.slice(0,20).map((emoji_find, index) => 
					 <div key={index} className="itmes">
						<span className="emoji">{emoji_find.symbol} {emoji_find.title}
						<p onClick={() => this.copyToClipboard(emoji_find.symbol) } className="emoji_copy">Click to Copy Emoji</p>
						</span>
					</div>
				)} 
			</div>
			</div>
		)
	}			
}
export default Filter;