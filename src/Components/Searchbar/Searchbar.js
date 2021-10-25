import React, { useState } from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";
import "./Searchbar.css";


function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (
        value.Name.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.Nationality.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.Club.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.Position.toLowerCase().includes(searchWord.toLowerCase()) 
        
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
        

    <div className="search-container">
      <div className="search">
        <input
        className = "search-field"
          type="text"
          placeholder=" Search Player"
          value={wordEntered}
          onChange={handleFilter}
        />
        <span>
        {filteredData.length === 0 ? (
            <button className="btn-regular">Search</button>
        ) : (
            <button className="btn-regular" onClick = {clearInput}>Clear</button>
        )}    
        </span>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key = value.Club) => {
            return (
              <Router>
                <div className = "items">
                    {value.Name === "Cristiano Ronaldo" ? ( 
                        <Link className="link-style" to = "/cristiano" target="_blank">{value.Name}</Link>
                              
                    ) : (
                        <p>{value.Name}</p>
                    )}
                </div>
                </Router>
            );
          })}
        </div>
      )}
    </div>
    
  );
}

export default SearchBar;