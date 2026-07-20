'use client';
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { useMockGraphQL } from '@/hooks/useMockGraphQL';

export default function Home() {
  const { useQuery, useMutation } = useMockGraphQL();
  
  const { data: profile, loading: profileLoading } = useQuery('profile');
  const { data: projects, loading: projectsLoading } = useQuery('projects');

  const [updateProfile] = useMutation('UPDATE_PROFILE');
  const [addProject] = useMutation('ADD_PROJECT');
  const [deleteProject] = useMutation('DELETE_PROJECT');
  const [clearPortfolio] = useMutation('CLEAR_PORTFOLIO');

  const [editingProfile, setEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({ name: '', bio: '' });

  const [projectForm, setProjectForm] = useState({ title: '', description: '', year: '' });

  if (profileLoading || projectsLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    updateProfile(profileForm);
    setEditingProfile(false);
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    addProject(projectForm);
    setProjectForm({ title: '', description: '', year: '' });
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Profile Section */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Creator Portfolio
            </h1>
            {!editingProfile && (
              <button 
                onClick={() => { setProfileForm(profile); setEditingProfile(true); }}
                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                Edit Profile
              </button>
            )}
          </div>

          {editingProfile ? (
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  value={profileForm.name} 
                  onChange={e => setProfileForm({...profileForm, name: e.target.value})}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Bio</label>
                <textarea 
                  value={profileForm.bio} 
                  onChange={e => setProfileForm({...profileForm, bio: e.target.value})}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  rows="3"
                  required 
                />
              </div>
              <div className="flex gap-2">
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700">Save</button>
                <button type="button" onClick={() => setEditingProfile(false)} className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg font-medium">Cancel</button>
              </div>
            </form>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-2">{profile?.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">{profile?.bio}</p>
            </div>
          )}
        </section>

        {/* Add Project Section */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4">Add New Project</h2>
          <form onSubmit={handleProjectSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input 
                type="text" 
                value={projectForm.title}
                onChange={e => setProjectForm({...projectForm, title: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <input 
                type="number" 
                value={projectForm.year}
                onChange={e => setProjectForm({...projectForm, year: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                required 
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea 
                value={projectForm.description}
                onChange={e => setProjectForm({...projectForm, description: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                rows="2"
                required 
              />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700">Add Project</button>
            </div>
          </form>
        </section>

        {/* Projects Grid Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">My Projects</h2>
            {projects?.length > 0 && (
              <button 
                onClick={() => confirm('Clear all projects?') && clearPortfolio()}
                className="text-red-600 hover:underline text-sm font-medium"
              >
                Clear Portfolio
              </button>
            )}
          </div>
          
          {projects?.length === 0 ? (
            <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 rounded-xl p-8 text-center">
              <p className="text-indigo-600 dark:text-indigo-400 font-medium text-lg">
                You haven't added any projects to your portfolio yet!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects?.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onDelete={(id) => deleteProject({ id })} 
                />
              ))}
            </div>
          )}
        </section>

      </div>
    </main>
  );
}
