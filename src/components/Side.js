import React from "react"
import { Link } from "react-scroll"

function Side(props) {   
    
    return (        
        <div>
            <div id = "menu">
            <Link to="Privacy" id = "PrivacyScroll" spy={true} smooth={true}>
            <span>기본 정보</span>
            </Link>
            <Link to="technologyStack" id="technologyStackScroll" spy={true} smooth={true}>
            <span>기술스택/직무</span>
            </Link>
            <Link to="Education" id="EducationScroll" spy={true} smooth={true}>
            <span>학력</span>
            </Link>
            <Link to="link" id="linkScroll" spy={true} smooth={true}>
            <span>링크</span>
            </Link>
            <Link to="course" id="courseScroll" spy={true} smooth={true}>
            <span>교육 이력</span>
            </Link>
            <Link to="other" id="otherScroll" spy={true} smooth={true}>
            <span>기타 이력</span>
            </Link>
            
            </div>
        </div>
    )
}

export default Side;