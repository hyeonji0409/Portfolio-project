import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const TodoInsert = () => {
    //const [value, setValue] = useState('');
    let history = useNavigate();

    const [todo, setTodo] = useState({
        ID: 'root',
        NOW: ''
    });

    // const onChange = useCallback((e) => {
    //     setTodo(e.target.value);
    // }, []);


    const onChange = (e) => {
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출       
        setTodo({
            ...todo, // 기존의 prd 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    // 빈 배열 : 컴포넌트가 렌더링 될 때마다 기존 함수 계속해서 재사용
    // 기존의 값 조회하지 않고 바로 설정하는 경우  

    // const onSubmit = useCallback(
    //     e => {
    //         onInsert(value); // 입력된 value 값을 파라미터로 전달
    //         setValue(''); // 입력란 비우기

    //         // 새로고침 방지
    //         e.preventDefault()
    //     }, [onInsert, value]
    // );

    const onSubmit = (e) => {
        e.preventDefault();

        var frmData = new FormData(document.frmInsert);

        axios.post('http://localhost:8080/schedule/insert/', frmData)
            .then(
                response => {
                    alert("등록 완료");
                    window.location.reload();
                }
            );
    }

    return (
        <form name='frmInsert' className='TodoInsert' onSubmit={onSubmit}>
            <input
                name="NOW"
                placeholder='일정을 입력하세요.'
                value={todo.NOW}
                onChange={onChange} />
            <input
                name="ID"
                type="hidden"
                value={todo.ID}
                onChange={onChange} />
            <button type="submit"><MdAdd /></button>
        </form>
    );
};

export default TodoInsert;