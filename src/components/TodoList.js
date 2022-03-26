import React, { useEffect, useState } from 'react';
import './TodoList.scss';
import axios from 'axios';
import TodoListItem from './TodoListItem';

function TodoList(todos, onRemove, onToggle) {


    // state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadData = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/schedule/scheduleList');
        console.log(response.data);
        setData(response.data.scdList);
        setLoading(false);
    }

    // 렌더링할 때마다 호출 
    // 빈배열 : loadData() 한 번만 호출
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className='TodoList'>
            {
                data.map(function (scd, i) {
                    return <TodoListItem scd={scd} key={i}
                    />
                })



            }
        </div>
    );
};

export default TodoList;