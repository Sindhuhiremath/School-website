import "./About.css";
import School from "../../assets/school.jpg";

function About() {
  return (
    <div className="about">
      <img src={School} alt="school" className="gallery1" />

      <div className="abouts">
        <section id="history">
          <h2>History</h2>
          <p>
            Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students.
          </p>
        </section>

        <section id="vision">
          <h2>Vision</h2>
          <p>
            To create a learning environment that fosters academic excellence,
            critical thinking, and ethical values.
          </p>
        </section>

        <section id="mission">
          <h2>Mission</h2>
          <p>
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world.
          </p>
        </section>

        <section id="principal-message">
          <h2>Principal's Message</h2>
          <p>
            At Springdale, we believe in nurturing the potential of every
            student and guiding them towards a successful future.
          </p>
        </section>

        <section id="infrastructure">
          <h2>Infrastructure and Facilities</h2>
          <ul>
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>
              Library with a vast collection of books and digital resources
            </li>
            <li>
              Sports facilities including a playground, gymnasium, and swimming
              pool
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
