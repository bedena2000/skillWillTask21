import React from "react";
import store from "../store/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import TodoItem from "./TodoItem";

const TodoListWrapper = () => {
    const { todoList, currentStage } = useSelector((state) => state);
    const dispatch = useDispatch();
    let content = [];
    if (todoList.length > 0) {
        if (currentStage === "inWorking") {
            content = todoList.filter(item => item.isDone === false);
        } else {
            content = todoList.filter(item => item.isDone === true);
        };
    };
    return (
        <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px]">
                <button onClick={() => {
                    dispatch({
                        type: 'setWorking'
                    })
                }} className="p-[10px] bg-slate-400 rounded-[10px]">
                    inWorking
                </button>
                <button onClick={() => {
                    dispatch({
                        type: 'setDone'
                    })
                }} className="p-[10px] bg-slate-400 rounded-[10px]">
                    Done
                </button>
            </div>
            {
                content.map(item => <TodoItem
                    isDone={item.isDone}
                    title={item.title}
                    key={item.id}
                    id={item.id}
                />)
            }
        </div>
    )
};

export default TodoListWrapper;