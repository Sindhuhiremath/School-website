import React from 'react';
import './Students.css'; // Ensure you have a CSS file for styling

function Students() {
  return (
    <div className="student-life">
      <section id="extracurricular-activities">
        <h2>Extracurricular Activities</h2>
        <ul>
          <li>Music</li>
          <li>Dance</li>
          <li>Drama</li>
          <li>Art</li>
          <li>Sports</li>
          <li>Robotics</li>
          <li>Debate Club</li>
          <li>Science Club</li>
        </ul>
      </section>
      
      <section id="clubs-societies">
        <h2>Clubs and Societies</h2>
        <ul>
          <li>Literary Society</li>
          <li>Environmental Club</li>
          <li>Astronomy Club</li>
          <li>Coding Club</li>
        </ul>
      </section>
      
      <section id="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </section>
      
      <section id="student-council">
        <h2>Student Council</h2>
        <div className="council-member">
          <h3>President</h3>
          <p>Amy Parker, Grade 12</p>
        </div>
        <div className="council-member">
          <h3>Vice President</h3>
          <p>Rajiv Mehta, Grade 11</p>
        </div>
        <div className="council-member">
          <h3>Secretary</h3>
          <p>Lisa Wong, Grade 10</p>
        </div>
      </section>
    </div>
  );
}

export default Students;
