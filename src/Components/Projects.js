import React from "react";
import { useState } from "react";
import './Projects.css';
import logo from './../logo.gif';

function Projects() {
    const content = [
        ["Project 1 :", "The first project"],
        ["Project 2 :", "The second project"],
        ["Project 3 :", "The third project"]
    ];
    const [index, setIndex] = useState(0);

    function sub_index() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    function add_index() {
        if (index < content.length - 1) {
            setIndex(index + 1);
        }
    }
    return (
        <div className="projects">
            <button onClick={sub_index}>
                Previous
            </button>
            <div className="bck">
                <img src={logo} alt="logo"></img><br />
                <div className="text">
                    {content[index][0]}<br />
                    {content[index][1]}
                </div>
            </div>
            <button onClick={add_index}>
                Next
            </button>
        </div>
    )
}

export default Projects;