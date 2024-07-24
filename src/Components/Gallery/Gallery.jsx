import React from "react";
import "./Gallery.css";
import Classroom from "../../assets/classroom.jpg";
import Cultural from "../../assets/cultural.jpg";
import Exhibition from "../../assets/exhibition2.jpg";
import Library from "../../assets/library.jpg";
import Sports from "../../assets/sportsday.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <section id="photos">
        <h2>Photo Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src={Sports}
              alt="Students participating in various sports events"
            />
            <p>Students participating in various sports events.</p>
          </div>
          <div className="gallery-item">
            <img
              src={Exhibition}
              alt="Students presenting their science projects"
            />
            <p>Students presenting their science projects.</p>
          </div>
          <div className="gallery-item">
            <img
              src={Cultural}
              alt="Students performing in the cultural fest"
            />
            <p>Students performing in the cultural fest.</p>
          </div>
          <div className="gallery-item">
            <img
              src={Classroom}
              alt="A glimpse of our interactive classrooms"
            />
            <p>A glimpse of our interactive classrooms.</p>
          </div>
          <div className="gallery-item">
            <img
              src={Library}
              alt="Students reading and studying in the school library"
            />
            <p>Students reading and studying in the school library.</p>
          </div>
        </div>
      </section>

      <section id="videos">
        <h2>Video Gallery</h2>
        <div className="video-grid">
          <div className="video-item">
            <video controls>
              <source src="school_tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Virtual tour of Springdale Public School.</p>
          </div>
          <div className="video-item">
            <video controls>
              <source src="annual_function.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Highlights from the Annual Function 2023.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
