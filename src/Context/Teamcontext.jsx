import React, { createContext, useContext, useState, useEffect } from 'react';

// Step 1: Create a Team Context
export const TeamContext = createContext();

// Step 2: Provide Context at App Level
export const TeamProvider = ({ children }) => {
  // Get team members data from local storage or use an empty array as initial state
  const [teamMembers, setTeamMembers] = useState(() => {
    const storedData = localStorage.getItem('teamMembers');
    return storedData ? JSON.parse(storedData) : [];
  });

  // Function to add a new team member
  const addTeamMember = (member) => {
    setTeamMembers([...teamMembers, member]);
  };

  // Function to remove a team member by ID
  const removeTeamMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  // Function to update a team member by ID
  const updateTeamMember = (id, updatedMember) => {
    setTeamMembers(teamMembers.map(member => member.id === id ? updatedMember : member));
  };

  // Synchronize team members data with local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
  }, [teamMembers]);

  return (
    <TeamContext.Provider value={{ teamMembers, addTeamMember, removeTeamMember, updateTeamMember }}>
      {children}
    </TeamContext.Provider>
  );
};

// Step 3: Use TeamContext in Components
export const useTeam = () => useContext(TeamContext);
