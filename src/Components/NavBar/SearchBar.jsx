import { useState } from "react";
import './SearchBar.css';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSubmitClick = (event) => {
        event.preventDefault();
        console.log("Search term submitted:", searchTerm);
        setSearchTerm('');
    }
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
    <div className="search-bar-container">
      <div className="input-group">
        <input 
          value={searchTerm}
          className="form-control"
          placeholder="Search Shows and People" 
          onChange={handleSearchChange}
        />
        <button className="search_button" type="button" onClick={handleSubmitClick}>
          <svg
            width="18"
            height="18"
            fill="white"
            className="bi bi-search"
            viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
    </div>
    )
}
