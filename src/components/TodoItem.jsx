import React from "react";
import { AiFillDelete } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import { PiKeyReturnFill } from 'react-icons/pi';
import { useDispatch } from "react-redux";

const TodoItem = ({ title, isDone, id }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center gap-[15px] bg-yellow-500 rounded-[10px] justify-between p-[10px] ">
            <p className="text-white font-bold uppercase">{title}</p>
            <div className="flex items-center gap-[10px]">
                {
                    isDone ? (
                        <PiKeyReturnFill
                            onClick={() => {
                                dispatch({
                                    type: "updateTodo/inProgress",
                                    payload: id
                                })
                            }}
                            className="cursor-pointer" />
                    ) : (
                        <AiFillCheckCircle
                            onClick={() => {
                                dispatch({
                                    type: "updateTodo/done",
                                    payload: id
                                })
                            }}
                            className="cursor-pointer" />
                    )
                }
                <AiFillDelete onClick={() => {
                    dispatch({
                        type: "updateTodo/delete",
                        payload: id
                    })
                }} className="cursor-pointer" />
            </div>
        </div>
    )
};

export default TodoItem; 
