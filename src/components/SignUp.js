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
        memName: '',
        memEamil: '',
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
        memName: '',
        memEamil: '',
        memPhone: '',
		memAddress: '',
		memAddressDetail: ''
    })
    };

    const onSubmit = (e) => {
        e.preventDefault();

        var frmData = new FormData(document.frmInsert);

        axios.post('http://localhost:8080/signup/', frmData)
            .then(
                response => {
                    alert("회원가입 완료");
                    history('/login'); 
                }
            );
			}

  return(
      <div class="container_signup">
  <div class="container1_signup">
      <div class="loginform">
      <h2>SignUp</h2>
      <div id="necessaryTxt_box">
			<span class="necessary">*</span> 필수입력사항
		</div>
    
      <form name="frmInsert" onSubmit={onSubmit} onReset={onReset}>
			<table class="memberTable">
				<tbody>
				<tr>
					<th>
						아이디
						<span class="necessary">
									*
								</span>
					</th>
					<td>
						<input type="text" name="memId" id="signup_input" maxlength="20" placeholder="아이디는 6자 이상 입력해주세요." value={mem.memId} onChange={onChange} />
						
					</td>
					<td>
						<button type="button" class="IDdouble_check signupcheckbutton" onclick="doubleCheck()">중복확인</button>
					</td>
				</tr>

				<tr>
					<th>
						비밀번호
						<span class="necessary">
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
						<span class="necessary">
									*
								</span>
					</th>
					<td>
						<input type="password" name="memberPW_check" id="signup_input" maxlength="20" placeholder="비밀번호를 한 번 더 입력해주세요."/>
					</td>
				</tr>

				<tr>
					<th>
						성명
						<span class="necessary">
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
						<span class="necessary">
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
						<span class="necessary">
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
						<span class="necessary">
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
						<span class="necessary">
									*
								</span>
					</th>
					<td>
						<input type="text" name="memAddressDetail" id="signup_input" placeholder="상세 주소를 입력해주세요."value={mem.memAddressDetail} onChange={onChange}/>

					</td>
				</tr>


				
				</tbody>
			</table>
			
			<div class="submitBox">
      			<input class="signupbutton" type='submit' value="회원가입"/>				
			</div>
		</form>
 
      </div>
      </div>
      </div>
  )
}

export default SignUp;