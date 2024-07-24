import React from "react";
import "./Academics.css"; // Ensure you have a CSS file for styling

function Academics() {
  return (
    <div className="academics">
      <section id="curriculum">
        <h2>Curriculum</h2>
        <div className="curriculum-section">
          <h3>Primary (Grades 1-5)</h3>
          <ul>
            <li>English</li>
            <li>Mathematics</li>
            <li>Science</li>
            <li>Social Studies</li>
            <li>Art</li>
            <li>Physical Education</li>
          </ul>
        </div>
        <div className="curriculum-section">
          <h3>Secondary (Grades 6-10)</h3>
          <ul>
            <li>English</li>
            <li>Mathematics</li>
            <li>Science (Physics, Chemistry, Biology)</li>
            <li>Social Studies</li>
            <li>Computer Science</li>
            <li>Physical Education</li>
            <li>Art</li>
          </ul>
        </div>
        <div className="curriculum-section">
          <h3>Senior Secondary (Grades 11-12)</h3>
          <div className="stream">
            <h4>Science Stream</h4>
            <ul>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Mathematics</li>
              <li>Computer Science</li>
              <li>English</li>
            </ul>
          </div>
          <div className="stream">
            <h4>Commerce Stream</h4>
            <ul>
              <li>Accountancy</li>
              <li>Business Studies</li>
              <li>Economics</li>
              <li>Mathematics</li>
              <li>English</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="teaching-methodologies">
        <h2>Teaching Methodologies</h2>
        <p>
          We use a blend of traditional and modern teaching techniques to cater
          to different learning styles.
        </p>
      </section>

      <section id="educational-resources">
        <h2>Educational Resources</h2>
        <p>
          Digital classrooms, interactive learning modules, and access to online
          educational platforms.
        </p>
      </section>
    </div>
  );
}

export default Academics;
