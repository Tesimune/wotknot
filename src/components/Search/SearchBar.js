import React, { useState } from 'react';
import './SearchBar.css';
import { GoSearch } from "react-icons/go";
import { MdSearchOff } from "react-icons/md";


const SearchBar = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    const handleDrag = (e) => {
        setPosition({
            x: position.x + e.movementX,
            y: position.y + e.movementY,
        });
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility} style={{color:"white",border:"0px",borderRadius:"20px", backgroundColor:"transparent", fontSize:"40px", cursor:"pointer", marginRight:"50px"}}>
                {isVisible ? <MdSearchOff /> : <GoSearch />}
            </button>

            {isVisible && (
                <div
                    className="search-bar"
                    style={{ left: `${position.x}px`, top: `${position.y}px` }}
                    onMouseMove={(e) => handleDrag(e)}
                >
                    <input type="text" placeholder="Search" className='searchs' style={{ color:"black",marginRight:"50px" ,border:"0px",width:"200px", height:"50px", fontSize:"15px", backgroundColor:"transparent"}} />
                    <button onClick={toggleVisibility} style={{ width:"100px", height:"100px",fontSize:"50px", border:"0px",borderRadius:"20px", backgroundColor:"black", cursor:"pointer", marginRight:"50px", color:"white"}}>
                        {isVisible ? <GoSearch /> : <MdSearchOff />}
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
