import TaskItem from "./TaskItem";

export default function TaskList({ tasks, deleteTask }) {
    if (tasks.length === 0) {
        return (
            <div className="text-center py-12 bg-white/5 backdrop-blur-xl border border-white/5 rounded-3xl">
                <p className="text-slate-400">No tasks yet. Enjoy the silence.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <TaskItem key={task._id} task={task} deleteTask={deleteTask} />
            ))}
        </div>
    );
}
