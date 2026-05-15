export default function TaskItem({ task, deleteTask }) {
    const priorityConfig = {
        low: { color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
        medium: { color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
        high: { color: 'text-rose-400', bg: 'bg-rose-400/10', border: 'border-rose-400/20' }
    };
    
    const pConf = priorityConfig[task.priority] || priorityConfig.medium;

    return (
        <div className="group relative bg-white/5 backdrop-blur-xl border border-white/5 p-6 rounded-2xl hover:bg-white/10 hover:border-white/10 transition-all duration-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/20">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-slate-100 truncate tracking-tight">
                        {task.title}
                    </h2>
                    <span className={`px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest rounded-full border ${pConf.bg} ${pConf.color} ${pConf.border}`}>
                        {task.priority}
                    </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {task.description}
                </p>
            </div>

            <button
                onClick={() => deleteTask(task._id)}
                className="sm:opacity-0 group-hover:opacity-100 transition-all duration-300 bg-rose-500/10 hover:bg-rose-500 hover:text-white text-rose-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/50"
                title="Delete Task"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    );
}
