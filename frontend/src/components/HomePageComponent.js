import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import '../stylesheets/HomePageComponent.css'
import VideoList from './VideoList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import VideoUpload from './VideoUpload';
import { useSelector } from "react-redux";

const WelcomePage = () => {
  const BASE_REMOTE_URL = "http://localhost:3500" // move this to env.
  const [videoData, setVideoData] = useState([]);
  const user = useSelector((state) => state.login.userDetails)
  const isSignedIn = useSelector((state) => state.session.authenticated)

  useEffect(() => {
    axios.get(`${BASE_REMOTE_URL}/trending`)
      .then(response => {
        console.log(response.data)
        setVideoData(response.data)
      }
      )
      .catch(error => console.error('Error fetching video data:', error));
  }, []);

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="welcome-page ">
      <Row className="justify-content-center align-items-center vh-40">
        <Col className="text-center">
          <h1>Welcome to Your Streaming Service</h1>
          <p className="lead">Unlimited access to thousands of videos!</p>

          {
            isSignedIn ?
            <div className="cta-buttons">
            <Link to="/profile">
              <Button variant="primary" className="me-2">
                Hi, {user.name}
              </Button>
            </Link>

            <Button variant="success" className="me-2" onClick={() => setShowModal(true)}>
                Upload Video
              </Button>
            <VideoUpload show={showModal} onHide={() => setShowModal(false)}/>
            </div>

            :
            <div className="cta-buttons">
               <Link to="/register">
              <Button variant="primary" className="me-2">
                Register
              </Button>
            </Link>

            <Link to="/login">
              <Button variant="secondary" className="me-2">
                Login
              </Button>
            </Link>
            </div>
  
          }
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center m-5">
        <SearchBar />
      </Row>
      <Row>
        <VideoList header="Trending Videos" videoData={videoData} />
      </Row>

      {isSignedIn ? <Row>
        <VideoList header="Recently watched" videoData={videoData} />
      </Row>: <div></div>}

    </div>
  );
};

export default WelcomePage;


