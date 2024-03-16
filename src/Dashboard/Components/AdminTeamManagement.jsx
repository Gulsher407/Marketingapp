import React, { useContext, useState } from 'react';
import { TeamContext } from "../../Context/Teamcontext";

function AdminTeamManagement() {
  const { teamMembers, addTeamMember, removeTeamMember, updateTeamMember } = useContext(TeamContext);

  const [newMember, setNewMember] = useState({
    name: '',
    position: '',
    imageURL: ''
  });

  const [selectedMember, setSelectedMember] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    addTeamMember({ ...newMember, id });
    setNewMember({
      name: '',
      position: '',
      imageURL: ''
    });
  };

  const handleRemoveMember = (id) => {
    removeTeamMember(id);
  };

  const handleEditMember = (member) => {
    setSelectedMember(member);
    setNewMember({
      name: member.name,
      position: member.position,
      imageURL: member.imageURL
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (selectedMember) {
      updateTeamMember(selectedMember.id, newMember);
      setNewMember({
        name: '',
        position: '',
        imageURL: ''
      });
      setSelectedMember(null);
    }
  };
  return (
    <div className="container mx-auto p-4 py-10 rounded-xl bg-white">
      <h2 className="text-3xl text-center font-semibold mb-4">Team Members</h2>
      <div className="grid grid-cols-4 gap-4">
        {teamMembers.map(member => (
          <div key={member.id} className="flex flex-col justify-center items-center border-2 rounded-lg item-center p-4">
            <img src={member.imageURL} alt={member.name} className="w-32 h-32 rounded-full mb-4" />
            <p className="font-semibold">{member.name}</p>
            <p className="text-gray-500">{member.position}</p>
            <div className="flex justify-evenly mt-4">
              <button onClick={() => handleRemoveMember(member.id)} className="bg-red-500 text-white px-3 py-1 rounded-full mr-2">Remove</button>
              <button onClick={() => handleEditMember(member)} className="bg-blue-500 text-white px-3 py-1 rounded-full">Edit</button>
            </div>
          </div>
        ))}
      </div> 
            <div className='flex justify-center items-center'>
      <div className="mt-8 w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Add New Member</h2>
        <form onSubmit={handleAddMember} className="flex flex-col">
          <input type="text" required name="name" value={newMember.name} onChange={handleInputChange} placeholder="Name" className="border border-gray-300 rounded-md px-4 py-2 mb-4" />
          <input type="text" required name="position" value={newMember.position} onChange={handleInputChange} placeholder="Position" className="border border-gray-300 rounded-md px-4 py-2 mb-4" />
          <input type="text" required name="imageURL" value={newMember.imageURL} onChange={handleInputChange} placeholder="Image URL" className="border border-gray-300 rounded-md px-4 py-2 mb-4" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Member</button>
        </form>
      </div>
      </div>

      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Member</h2>
            <form onSubmit={handleEditSubmit} className="flex flex-col">
              <input type="text" required name="name" value={newMember.name} onChange={handleInputChange} placeholder="Name" className="border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <input type="text" required name="position" value={newMember.position} onChange={handleInputChange} placeholder="Position" className="border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <input type="text" required name="imageURL" value={newMember.imageURL} onChange={handleInputChange} placeholder="Image URL" className="border border-gray-300 rounded-md px-4 py-2 mb-4" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminTeamManagement;
