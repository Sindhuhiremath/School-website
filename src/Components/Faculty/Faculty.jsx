import React from 'react';
import './Faculty.css'; // Ensure you have a CSS file for styling

const staffProfiles = [
  {
    name: "John Doe",
    position: "Principal",
    qualifications: "M.Ed",
    experience: "20 years of experience in educational administration"
  },
  {
    name: "Jane Smith",
    position: "Vice Principal",
    qualifications: "M.Sc. in Physics",
    experience: "15 years of teaching experience"
  },
  {
    name: "Emily Johnson",
    position: "English Teacher",
    qualifications: "M.A. in English",
    experience: "10 years of teaching experience"
  },
  {
    name: "Michael Brown",
    position: "Mathematics Teacher",
    qualifications: "M.Sc. in Mathematics",
    experience: "8 years of teaching experience"
  },
  {
    name: "Sophia Davis",
    position: "Science Teacher",
    qualifications: "M.Sc. in Chemistry",
    experience: "12 years of teaching experience"
  },
  {
    name: "David Wilson",
    position: "Computer Science Teacher",
    qualifications: "B.Tech in Computer Science",
    experience: "5 years of teaching experience"
  }
];

function Faculty() {
  return (
    <div className="profiles">
      <h2>Staff Profiles</h2>
      <div className="profiles-list">
        {staffProfiles.map((staff, index) => (
          <div key={index} className="profile-card">
            <h3>{staff.name}</h3>
            <p><strong>Position:</strong> {staff.position}</p>
            <p><strong>Qualifications:</strong> {staff.qualifications}</p>
            <p><strong>Experience:</strong> {staff.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
