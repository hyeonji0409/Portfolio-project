import React , { useState }from "react";
import './SignUp.scss';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




function SignUp(props) {

	
	//[추가]
	const [address, setAddress] = useState(''); // 주소

	//[추가]
	const setDaumAddress = (res) => {
		setAddress(res);
	}

  const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }


	let history = useNavigate();


	
    //state
    const [mem, setMem] = useState({
        memId: '',
        memPw: '',
		memrePw:'',
        memName: '',
        memEmail: '',
        memPhone: '',
		memAddress: '',
		memAddressDetail: ''
    });

    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setMem({
            ...mem, // 기존의 prd 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setMem({
        memId: '',
        memPw: '',
		memrePw:'',
        memName: '',
        memEmail: '',
        memPhone: '',
		memAddress: '',
		memAddressDetail: ''
    })
    };
	

    const onSubmit = (e) => {
        e.preventDefault();	
        var frmData = new FormData(document.frmInsert);
		
		if (mem.memId === "") { //해당 입력값이 없을 경우 같은말: if(!uid.value)
			alert("아이디를 입력하세요.");
			mem.memId.focus(); //focus(): 커서가 깜빡이는 현상, blur(): 커서가 사라지는 현상
			
		};
		if (mem.memPw === "") {
			alert("비밀번호를 입력하세요.");
			mem.memPw.focus();
		};
		
	
		if (mem.memrePw === "") {
			alert("비밀번호을 확인해주세요.");
			mem.memrePw.focus();
		};
	
	
		if (mem.memrePw !== mem.memPw) {
			alert("비밀번호가 일치하지 않습니다.");
			mem.memrePw.focus();
		};
	
		if (mem.memName === "") {
			alert("이름을 입력하세요.");
			mem.memName.focus();
		};
	
		if (mem.memEmail === "") {
			alert("이메일 주소를 입력하세요.");
			mem.memEmail.focus();
		}
	
		if (mem.memPhone === "") {
			alert("휴대폰 번호를 입력하세요.");
			mem.memPhone.focus();
		}
	
		if (address === "") {
			alert("주소를 입력하세요.");
			address.focus();
		}
	
		if (mem.memAddressDetail === "") {
			alert("상세주소를 입력하세요.");
			mem.memAddressDetail.focus();
		}

        axios.post('http://localhost:8080/signup/', frmData)
            .then(
					
				response => {
                    alert("회원가입 완료");
                    history('/login'); 
                }
            );
			}
		
	const onSubmit1 = (e) => {
		e.preventDefault();
		
		axios.post('http://localhost:8080/idcheck/'+ mem.memId)
			.then(
				response => {
					
					// alert("사용가능");
					console.log(response.data)
					if (response.data === "use") {
                        alert("사용가능");
                        console.log("사용");
                    } else {
                        
                        alert('사용 불가');
                    }
				}
			);
	}

  return(
      <div className="container_signup">
  <div className="container1_signup">
      <div className="loginform">
      <h2>SignUp</h2>
      <div id="necessaryTxt_box">
			<span className="necessary">*</span> 필수입력사항
		</div>
    
      <form name="frmInsert" onSubmit={onSubmit} onReset={onReset}>
			<table className="memberTable">
				<tbody>
				<tr>
					<th>
						아이디
						<span className="necessary">
									*
								</span>
					</th>
					<td>
						<input type="text" name="memId" id="signup_input" maxlength="20" placeholder="아이디는 6자 이상 입력해주세요." value={mem.memId} onChange={onChange} />
						
					</td>
					<td>
					<button name="frmInsert1" onClick={onSubmit1}>중복확인</button>
					</td>
				</tr>

				<tr>
					<th>
						비밀번호
						<span className="necessary">
									*
								</span>
					</th>
					<td>
						<input type="password" name="memPw" id="signup_input" maxlength="20" placeholder="비밀번호를 입력해주세요."value={mem.memPw} onChange={onChange}/>
					</td>
				</tr>

				<tr>
					<th>
						비밀번호 확인
						<span className="necessary">
									*
								</span>
					</th>
					<td>
						<input type="password" name="memrePw" id="signup_input" maxlength="20" placeholder="비밀번호를 한 번 더 입력해주세요." value={mem.memrePw} onChange={onChange}/>
					</td>
				</tr>

				<tr>
					<th>
						성명
						<span className="necessary">
									*
								</span>
					</th>
					<td>
						<input type="text" name="memName" id="signup_input" maxlength="20" placeholder="성명을 입력해주세요."value={mem.memName} onChange={onChange}/>
					</td>
				</tr>

				<tr>
					<th>
						이메일
						<span className="necessary">
									*
								</span>
					</th>
					<td>
						<input type="text" name="memEmail" id="signup_input" maxlength="25" placeholder="이메일을 입력해주세요." value={mem.memEmail} onChange={onChange}/>
					</td>
				</tr>

				<tr>
					<th>
						휴대폰
						<span className="necessary">
									*
								</span>
					</th>
					<td>
						<input type="text" name="memPhone" id="signup_input" maxlength="25" placeholder="휴대폰 번호를 입력해주세요." value={mem.memPhone} onChange={onChange}/>
					</td>
				</tr>

				<tr>
					<th>
						주소
						<span className="necessary">
									*
								</span>
					</th>
					<td>
						<input  type="text" id="signup_input" name="memAddress" placeholder="주소를 입력해주세요." onClick={openPostCode}  value={address}  onChange={onChange}/>
            
            <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                         <PopupPostCode onClose={closePostCode} setDaumAddress={setDaumAddress} />
                    </PopupDom>
                )}
            </div>
          
          </td>
				</tr>

				<tr>
					<th>
						상세주소
						<span className="necessary">
									*
								</span>
					</th>
					<td>
						<input type="text" name="memAddressDetail" id="signup_input" placeholder="상세 주소를 입력해주세요."value={mem.memAddressDetail} onChange={onChange}/>

					</td>
				</tr>


				
				</tbody>
			</table>
			
			<div className="submitBox">
      			<input className="signupbutton" type='submit' value="회원가입"/>				
			</div>
		</form>
 
      </div>
      </div>
      </div>
  )
}

export default SignUp;