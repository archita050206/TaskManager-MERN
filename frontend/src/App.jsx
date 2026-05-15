import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {

    const [tasks, setTasks] = useState([]);

    const [form, setForm] = useState({
        title: "",
        description: "",
        priority: "medium"
    });

    const fetchTasks = async() => {

        const res = await axios.get("http://localhost:5001/api/tasks");

        setTasks(res.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async() => {

        await axios.post(
            "http://localhost:5001/api/tasks",
            form
        );

        setForm({
            title: "",
            description: "",
            priority: "medium"
        });

        fetchTasks();
    };

    const deleteTask = async(id) => {

        await axios.delete(
            `http://localhost:5001/api/tasks/${id}`
        );

        fetchTasks();
    };

    return (
        <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#1e1b4b] to-slate-900 p-6 sm:p-12 font-sans text-slate-200 flex items-start justify-center relative z-0">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>

            <div className="w-full max-w-4xl mx-auto pt-10">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 mb-4 drop-shadow-sm">
                        Task Horizon
                    </h1>
                    <p className="text-slate-400 font-medium">Elevate your productivity to the next level.</p>
                </div>

                <TaskForm form={form} setForm={setForm} addTask={addTask} />

                <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
        </div>
    );
}