
import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hello, I'm E. Kititi Siva Santosh, a Computer Science Engineering student currently in my
          third year at VIT-AP University. My hometown is Nandyal, a place I hold close to my heart.
          I'm passionate about software development and creating meaningful digital experiences.
        </p>
        <p>
          I'm on a journey to expand my skills and knowledge, and I'm currently pursuing a course in
          the MERN (MongoDB, Express.js, React, Node.js) full-stack development offered by Ethnus.
          This comprehensive course has given me valuable insights into building modern web
          applications.
        </p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>HTML and CSS projects</p><hr/>
          <p>GitHub Repository Link  - <a href='https://github.com/KiritiSivaSantosh/Mern-task'>Repository_Link</a></p>
          <p>Deplyment Link  - <a href='https://kiritisivasantosh.github.io/Mern-task/'>Deplyment_Link</a></p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Bootsrap & Javascript Projects</p><hr/>
          <p>GitHub Repository Link  - <a href='https://github.com/KiritiSivaSantosh/Mern-task-2'>Repository_Link</a></p>
          <p>Deplyment Link  - <a href='https://kiritisivasantosh.github.io/Mern-task-2/'>Deplyment_Link</a></p>
        </div>
        <div className="project">
          <h3>Project-3</h3>
          <p>Word count using react js</p><hr/>
          <p>GitHub Repository Link  - <a href='https://github.com/KiritiSivaSantosh/Node-js-task-1'>Repository_Link</a></p>
          <p>Deplyment Link  - <a href='https://node-js-task-1-inky.vercel.app/'>Deplyment_Link</a></p>
        </div>
        <div className="project">
          <h3>Project-4</h3>
          <p>Calculator using react js</p><hr/>
          <p>GitHub Repository Link  - <a href='https://github.com/KiritiSivaSantosh/Node-js-task-2'>Repository_Link</a></p>
          <p>Deplyment Link  - <a href='https://node-js-task-2-snowy.vercel.app/'>Deplyment_Link</a></p>
        </div>
        <div className="project">
          <h3>Project-5</h3>
          <p>Color Picker using react js</p><hr/>
          <p>GitHub Repository Link  - <a href=' https://github.com/KiritiSivaSantosh/Node-js-task-3'>Repository_Link</a></p>
          <p>Deplyment Link  - <a href='https://node-js-task-3.vercel.app/'>Deplyment_Link</a></p>
        </div>
        <div className="project">
          <h3>Project-6</h3>
          <p>Data Representation using react js</p><hr/>
          <p>GitHub Repository Link  - <a href='https://github.com/KiritiSivaSantosh/Node-js-task-4'>Repository_Link</a></p>
          <p>Deplyment Link  - <a href='https://node-js-task-4.vercel.app/'>Deplyment_Link</a></p>
        </div>
        <div className="project">
          <h3>Project-6</h3>
          <p>Age Calculator using react js</p><hr/>
          <p>GitHub Repository Link  - <a href='https://github.com/KiritiSivaSantosh/Node-js-task-5'>Repository_Link</a></p>
          <p>Deplyment Link  - <a href='https://node-js-task-5.vercel.app/ '>Deplyment_Link</a></p>
        </div>
        <div className="project">
          <h3>Project-7</h3>
          <p>LCM & HCF for multiple Numbers</p><hr/>
          <p>GitHub Repository Link  - <a href='https://github.com/KiritiSivaSantosh/LCM_HCF_FOR_MULTIPLE_NUMBERS'>Repository_Link</a></p>
        </div>
        <div className="project">
          <h3>Project-8</h3>
          <p>Portfolio Using css and html</p><hr/>
          <p>GitHub Repository Link  - <a href='https://github.com/KiritiSivaSantosh/my'>Repository_Link</a></p>
        </div>
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: kiritisivasantosh@gmail.com</p>
        <p>Phone Number : +91 8074703858</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/kiriti-siva-santosh-b26aba25b">LinkedIn Profile</a></p>
      </section>
    </div>
  );
}

export default Portfolio;
