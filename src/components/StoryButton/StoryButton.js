import React from 'react';
import './StoryButton.css'; // Make sure to style your button appropriately

const StoryButton = ({ onClick }) => {
    return (
        <button className="story-button" onClick={onClick}>
            More Stories
        </button>
    );
};

export default StoryButton;
