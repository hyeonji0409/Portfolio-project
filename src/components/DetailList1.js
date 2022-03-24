import React from "react"

const DetailList1 = (props) => {

  return (
    <div>
      {props.countList && props.countList.map((item, i) => (
        <div key={i}>
            <hr id="Hr"/><br/>

            <h5 id="smallTitle">교육명</h5>
                    <input type="text" id="input" placeholder="ex) 지능형 웹서비스 풀스택 개발"></input>

                    <h5 id="smallTitle">교육기관</h5>
                    <input type="text" id="input" placeholder="ex) 멀티캠퍼스"></input>

                    <h5 id="smallTitle">교육기간</h5>
                    <input type="text" id="input" placeholder="ex) 21.10.25 ~ 22.04.11"></input>

                    <h5 id="smallTitle">상세내용</h5>
                    <input type="text" id="input" placeholder="ex) 웹서비스 개발에 필요한 프론트엔드, 백엔드 기술을 아울러 학습, 활용 가능하도록 실무 능력 상승"></input>
            <br/>
        </div>
      ))}
    </div>
  )
}

export default DetailList1