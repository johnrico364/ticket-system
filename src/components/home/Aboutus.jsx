import "./css/AboutUs.css";
import { Link } from "react-router-dom";

export let Aboutus = () => {
  return (
    <div className="container-fluid">
      <div className="about-container">
        <div className="row justify-content-center mt-3 px-3">
          <div className="col-md-6 px-3 overflow-auto message-container">
            <p>
              Welcome to E-YORN Airlines Booking System, an innovative platform
              founded by two passionate Computer Science students, Kent John
              Brian C. Flores and John Anthony Rico, studying at ACLC College of
              Mandaue. At E-YORN, our aim is to introduce a seamless and
              efficient ticket booking system, tailored to the needs of today's
              travelers.
            </p>
            <br />
            <p>
              Kent and John's shared enthusiasm for technology and their
              deep-rooted interest in Computer Science led them to embark on a
              mission to simplify the process of booking airline tickets. E-YORN
              emerged from their vision of merging their technological expertise
              with their passion for travel to create an accessible and
              user-friendly platform. As Computer Science students, Kent and
              John are committed to applying their academic knowledge and skills
              to revolutionize the online ticketing experience. Their
              educational background equips them with insights into cutting-edge
              technologies and a forward-thinking approach to software
              development.
            </p>
            <br />
            <p>
              E-YORN is more than just a ticket booking system; it's a testament
              to the dedication and innovation of students in the field of
              technology. Our platform offers a user-centric design, enabling
              travelers to effortlessly search, compare, and book flights while
              ensuring a smooth and secure transaction process.
            </p>
            <br />
            <p>
              Understanding the importance of convenience and reliability,
              E-YORN prioritizes user satisfaction. We aim to provide
              exceptional customer support, catering to the needs of every
              traveler using our platform.
            </p>
            <br />
            <p>
              Despite being students, Kent and John are committed to delivering
              excellence in their endeavor with E-YORN. Their passion for
              technology and their commitment to enhancing the travel experience
              drives the continuous improvement and growth of the platform. Join
              Kent John Brian C. Flores and John Anthony Rico, Computer Science
              students at ACLC College of Mandaue, in their journey to redefine
              the way travelers book airline tickets online. Experience
              convenience, reliability, and innovation with E-YORN.
            </p>
            <br />
            <h5>
              Technologies we use: <b>ReactJS, Bootstrap, Css, PLSQL(Oracle)</b>
            </h5>
            <p>
              Repository:{" "}
              <Link to={"https://github.com/johnrico364/ticket-system.git"}>
                https://github.com/johnrico364/ticket-system.git
              </Link>
            </p>
            <br />
            <div>Do you have a question?</div>
            <p>Contact Us: johnrico364@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
