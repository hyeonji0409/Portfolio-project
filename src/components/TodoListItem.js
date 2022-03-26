import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from 'axios';
import './TodoListItem.scss';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

function TodoListItem(props) {

    let history = useNavigate();

    const onDeleteItem = () => {
        if (window.confirm("삭제하시겠습니까?")) {
            axios.get('http://localhost:8080/schedule/delete/' + props.scd.no)
                .then(
                    () => {
                        history('/todoList');
                        window.location.reload();
                        // reload 하지 않으면
                        //DB에서는 삭제되지만 현재 화면은 안 바뀜
                    }   
                ).catch(err => console.log(err));
        }
    }

    return (
        <div className='TodoListItem'>
            {/* <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{props.scd.now}</div>
            </div> */}
            <div>{props.scd.now}</div> &nbsp;&nbsp;
            <div className='remove' onClick={() => onDeleteItem()}>
                <BsFillTrashFill />
            </div>
        </div>
    );
}

export default TodoListItem;