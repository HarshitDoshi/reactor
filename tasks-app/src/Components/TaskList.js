import React, { useState } from 'react';
import data from "../Data/development_data";

const Task = (props) => {
  const { id, title, status, icon } = props.task;
  const taskDeleteHandler = props.deleteHandler;

  return (
    <article key={id} className="flex justify-between content-center border border-solid border-gray-200 shadow-md rounded-lg m-2 p-2">
      <div className="flex justify-start content-center">
        <img className="transform scale-75 bg-transparent p-1" src={icon} alt="Task Item"></img>
        <div className="flex flex-col justify-start items-start">
          <h3 className="py-2 text-xl font-semibold">{title}</h3>
          <p className="px-2 py-1 rounded-full bg-blue-300 text-sm">{status}</p>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <button className="font-mono font-bold text-xs border border-solid border-red-500 px-2 py-1 bg-red-300 shadow rounded-full" onClick={() => taskDeleteHandler(id)}>X</button>
      </div>
    </article>
  )
}

const TaskList = () => {
  const [tasks, setTasks] = useState(data);
  const deleteTaskHandler = (taskId) => {
    console.log(taskId);
    const newList = tasks.filter((task) => task.id !== taskId);
    console.log(newList);
    setTasks(newList);
  }
  return (
    <div className="flex flex-col justify-stretch">
      <div className="flex justify-between items-baseline">
        <h1 className="m-2 p-2 font-bold text-4xl border-b-4 border-solid border-black">Tasks</h1>
        <h2 className="text-xl px-4 py-2 m-2 border border-solid border-green-500 rounded-full"><span className="font-mono font-bold text-2xl">{tasks.length}</span> tasks in your list</h2>
      </div>
      <div>
        {tasks.map((task) => {
          return (
            <Task key={task.id} task={task} deleteHandler={deleteTaskHandler} />
          );
        })}
      </div>
      <button className="text-white border border-solid border-red-600 bg-red-400 shadow-md rounded-lg m-2 p-2" onClick={() => setTasks([])}>Clear All</button>
    </div>
  )
}

export default TaskList
