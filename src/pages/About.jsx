import React from 'react'
import CustomNavbar from '../components/Navbar'


const About = () => {
  return (
    <div>
        <CustomNavbar />
    <div className="about-section">
        <h2>About Us</h2>
        <p className="p-t">
          Fit-Track is a one-of-a-kind fitness program that combines strength, flexibility, and cardiovascular exercise to create a powerful, enduring workout. Our team of experts and trainers will guide you through the process, helping you achieve your fitness goals.
        </p>
        <h2>Our Mission</h2>
        <p className="p-t">
          Our mission is to provide a safe, enjoyable, and accessible fitness experience for everyone. We strive to create a workout program that is both effective and enjoyable for our users.
        </p>
        <h2>Our Team</h2>
        <p className="p-t">
          Fit-Track is led by a team of dedicated and passionate fitness professionals. Our team includes trainers, nutritionists, and coaches who have over 25</p>
        <div className="about-content">
          <div className="about-text">
            <h3>Everybody Welcome Favourite Gym</h3>
            <p className="p-t">
              The next station is a program in which the trainer wants his power-lifter to make significant progress within the next few months. This means achieving a higher maximum strength set and personal bests while maintaining the right form and safety. Our gym is the best environment to find it.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>32+</h4>
                <p className="p-t">Years of Experience</p>
              </div>
              <div className="stat">
                <h4>76+</h4>
                <p className="p-t">Worldwide Locations</p>
              </div>
            </div>
          </div>
          <div className="about-images">
            <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gym Image 1" />
            <img src="https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gym Image 2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About