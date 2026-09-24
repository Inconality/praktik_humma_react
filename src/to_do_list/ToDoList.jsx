import { useEffect, useState } from "react"
import './ToDoList.css';

function ToDoList(){
    // To-Do List
    const [tasks, setTasks] = useState(["Bangun tidur", "Sholat shubuh", "Mandi pagi", "Rapikan kamar"]);
    const [newTask, setNewTask] = useState("");
    const [error, setError] = useState(false);
    
    useEffect(() => {
        document.title = `Anda memiliki ${tasks.length} tugas!`;
    }, [tasks]);

    function handleInputChange(e){
        setNewTask(e.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setError(false);
            setTasks(prevTask => [...prevTask, newTask]);
            setNewTask("");
        }else{
            setError(true);
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    // Unnecessary clock
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridien = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridien}`
    }
    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className="to-do-list">
            <div className="list">
                <h1>To-Do List</h1>
                <div>
                    <input type="text" placeholder="Masukkan tugas..." value={newTask} onChange={handleInputChange}/>
                    <button className="btn add-button" onClick={addTask}>+ Tambah Tugas</button>
                    {error && (<p className="error-message">Teks tidak boleh kosong.</p>)}
                </div>
                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="btn move-button" onClick={() => moveTaskUp(index)}>Naik ⬆</button>
                            <button className="btn move-button" onClick={() => moveTaskDown(index)}>Turun ⬇</button>
                            <button className="btn delete-button" onClick={() => deleteTask(index)}>Hapus 🗑️</button>
                        </li>
                    )}
                </ol>
            </div>
            <div>
                <div className="progress">
                    <p>Jumlah tugas yang tertulis: {tasks.length}</p>
                </div>
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </div>
    );
}

export default ToDoList
