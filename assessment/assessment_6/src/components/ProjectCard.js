import React from 'react';

export default function ProjectCard({ project, onDelete }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col h-full transition-transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
        {onDelete && (
          <button 
            onClick={() => onDelete(project.id)}
            className="text-red-500 hover:text-red-700 p-1"
            title="Delete project"
          >
            &times;
          </button>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-300 flex-grow mb-4">{project.description}</p>
      <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
        {project.year}
      </div>
    </div>
  );
}
