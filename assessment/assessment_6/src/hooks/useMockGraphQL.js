import { useState, useEffect } from 'react';


export function useMockGraphQL() {
  const [data, setData] = useState({
    profile: { name: 'Creator', bio: 'Welcome to my portfolio!' },
    projects: []
  });
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const savedProfile = localStorage.getItem('creator_profile');
    const savedProjects = localStorage.getItem('creator_projects');
    
    setData({
      profile: savedProfile ? JSON.parse(savedProfile) : { name: 'Creator', bio: 'Welcome to my portfolio!' },
      projects: savedProjects ? JSON.parse(savedProjects) : []
    });
    setLoading(false);
  }, []);


  const useQuery = (queryName) => {
    return { data: data[queryName], loading };
  };


  const useMutation = (mutationType) => {
    const mutate = async (variables) => {
      let newData = { ...data };
      
      if (mutationType === 'UPDATE_PROFILE') {
        newData.profile = variables;
        localStorage.setItem('creator_profile', JSON.stringify(variables));
      } else if (mutationType === 'ADD_PROJECT') {
        const newProject = { ...variables, id: Date.now().toString() };
        newData.projects = [...data.projects, newProject];
        localStorage.setItem('creator_projects', JSON.stringify(newData.projects));
      } else if (mutationType === 'DELETE_PROJECT') {
        newData.projects = data.projects.filter(p => p.id !== variables.id);
        localStorage.setItem('creator_projects', JSON.stringify(newData.projects));
      } else if (mutationType === 'CLEAR_PORTFOLIO') {
        newData.projects = [];
        localStorage.removeItem('creator_projects');
      }

      setData(newData);
      return { data: newData };
    };

    return [mutate];
  };

  return { useQuery, useMutation };
}
