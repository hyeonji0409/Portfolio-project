import React from 'react';

function componentAdd(props) {
    
    return (
        <div>
            <div id = "link" class = "scrollContent">
                    <img id="githubImg" alt ="github" src="./img/github.png"/>
                    <input type="text" id="inputLink" placeholder="ex) javascript"/>
                    <div id="hrBar">
                    <br/>
                    <hr id="addHr"/><button id="addButton">+</button>
                    <h3 id = "EducationAdd">링크 추가</h3>
                    </div>
                </div>
        </div>
    );
}

export default componentAdd;