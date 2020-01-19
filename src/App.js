import React from 'react';
import './App.css';
import Header from './Component/Header';
import EmojiSearch from './Component/Emoji';
// import SearchInput from './Component/SearchInput';

function App() {  
  return (
    <div className="App">
      <Header/>
      {/* <SearchInput/> */}
      <EmojiSearch/>
    </div>
  );
}

export default App;
