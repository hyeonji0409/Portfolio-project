import React from "react"

const DetailList = (props) => {

  return (
    <div>
      {props.countList && props.countList.map((item, i) => (
        <div key={i}>
            <img id="githubImg" alt ="github" src="./img/github.png"/>
                <input type="text" id="inputLink" placeholder="ex) javascript"/>
            <br/>
        </div>
      ))}
    </div>
  )
}

export default DetailList