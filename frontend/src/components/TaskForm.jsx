export default function TaskForm({ form, setForm, addTask }) {
    return (
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-[2rem] shadow-2xl mb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-5 z-10">
                <div className="md:col-span-12">
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        className="w-full bg-slate-900/50 border border-slate-700/50 p-4 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                    />
                </div>

                <div className="md:col-span-8">
                    <textarea
                        placeholder="Add a description..."
                        value={form.description}
                        rows="2"
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        className="w-full h-full bg-slate-900/50 border border-slate-700/50 p-4 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none"
                    />
                </div>

                <div className="md:col-span-4 flex flex-col gap-5">
                    <div className="relative">
                        <select
                            value={form.priority}
                            onChange={(e) => setForm({ ...form, priority: e.target.value })}
                            className="w-full bg-slate-900/50 border border-slate-700/50 p-4 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 appearance-none cursor-pointer pr-10"
                        >
                            <option value="low" className="bg-slate-800">Low Priority</option>
                            <option value="medium" className="bg-slate-800">Medium Priority</option>
                            <option value="high" className="bg-slate-800">High Priority</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>

                    <button
                        onClick={addTask}
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 flex items-center justify-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Create Task
                    </button>
                </div>
            </div>
        </div>
    );
}
