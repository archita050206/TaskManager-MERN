import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {

    const [tasks, setTasks] = useState([]);

    const [form, setForm] = useState({
        title: "",
        description: "",
        priority: "medium"
    });

    const fetchTasks = async() => {

        const res = await axios.get("http://localhost:5000/api/tasks");

        setTasks(res.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async() => {

        await axios.post(
            "http://localhost:5000/api/tasks",
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
            `http://localhost:5000/api/tasks/${id}`
        );

        fetchTasks();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-10">

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">

                <h1 className="text-3xl font-bold mb-6">
                    Task Manager
                </h1>

                <div className="space-y-4">

                    <input
                        type="text"
                        placeholder="Title"
                        value={form.title}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                title: e.target.value
                            })
                        }
                        className="w-full border p-3 rounded"
                    />

                    <textarea
                        placeholder="Description"
                        value={form.description}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                description: e.target.value
                            })
                        }
                        className="w-full border p-3 rounded"
                    />

                    <select
                        value={form.priority}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                priority: e.target.value
                            })
                        }
                        className="w-full border p-3 rounded"
                    >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                    </select>

                    <button
                        onClick={addTask}
                        className="bg-blue-500 text-white px-5 py-2 rounded"
                    >
                        Add Task
                    </button>

                </div>

                <div className="mt-8 space-y-4">

                    {
                        tasks.map(task => (

                            <div
                                key={task._id}
                                className="border p-4 rounded"
                            >

                                <h2 className="text-xl font-semibold">
                                    {task.title}
                                </h2>

                                <p>{task.description}</p>

                                <p className="mt-2">
                                    Priority:
                                    {" "}
                                    {task.priority}
                                </p>

                                <button
                                    onClick={() => deleteTask(task._id)}
                                    className="mt-3 bg-red-500 text-white px-4 py-1 rounded"
                                >
                                    Delete
                                </button>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
}