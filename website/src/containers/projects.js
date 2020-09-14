import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import stellarspine from '../assets/stellarspine.png';
import stellarspinecard from '../assets/stellarspinecard.png';
import sschart from '../assets/sschart.png';
import sshome from '../assets/sshome.png';
import airthoughts from '../assets/AirThoughts.png';
import airthoughtscard from '../assets/AirThoughtscard.png';
import mastermind from '../assets/Mastermind.png';
import mastermindcard from '../assets/Mastermindcard.png';
import chatprogram from '../assets/ChatProgram.png';
import hangman from '../assets/Hangman.png';
import hangmancard from '../assets/Hangmancard.png';
import nim from '../assets/Nim.png';
import utbs from '../assets/utbs.png';
import calculator from '../assets/Calculator.png';
import calculatorcard from '../assets/Calculatorcard.png';
import piano from '../assets/piano.png';
import roommonitor from '../assets/roommonitor.png';
import roommonitorcard from '../assets/roommonitorcard.png';
import foodblog from '../assets/foodblog.png';
import foodblogmodal from '../assets/foodblogmodal.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import {BsChevronCompactUp} from "react-icons/bs";
import {IconContext} from "react-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import Carousel from 'react-bootstrap/Carousel';
import {BsChevronCompactLeft} from "react-icons/bs";
import {BsChevronCompactRight} from "react-icons/bs";
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

export default class Projects extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      modalShow: Array(10).fill(false),
      imgCarousel: 0,
    }
    this.handleSelect = this.handleSelect.bind(this);

  }
  handleClose(i){
    const arr = this.state.modalShow.slice();
    arr[i] = false;
    this.setState({
      modalShow:arr
    });
  }
  handleShow(i){
    const arr = this.state.modalShow.slice();
    arr[i] = true;
    this.setState({
      modalShow:arr
    });
  }

  handleSelect(selectedIndex, e) {
		this.setState({
		  imgCarousel: selectedIndex,
		});
	}

  render(){
    return(
      <div class="container" id="projects">
          <h1>Projects</h1>
          <Row style={{marginTop: '2rem'}}>
            <Col md={4} style={{marginBottom: '2rem'}}>
              <Card className='card'>
                <Card.Img src={stellarspinecard}/>
                <Card.Body>
                    <Card.Title>Stellar Spine</Card.Title>
                    <Card.Text>
                      Scoliosis Brace Compliance Monitoring System
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{backgroundColor:'#8795FA', borderColor:'#8795FA', fontWeight:'bold'}}
                      onClick={() => this.handleShow(0)}>
                      Learn More
                    </Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginBottom: '2rem'}}>
              <Card className='card'>
                <Card.Img src={airthoughts}/>
                <Card.Body>
                    <Card.Title>Air Thoughts</Card.Title>
                    <Card.Text>
                      Realtime Web App for Airport Sentiment
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{backgroundColor:'#8795FA', borderColor:'#8795FA', fontWeight:'bold'}}
                      onClick={() => this.handleShow(1)}>
                      Learn More
                    </Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginBottom: '2rem'}}>
              <Card className='card'>
                <Card.Img src={piano}/>
                <Card.Body>
                    <Card.Title>WiFi Piano</Card.Title>
                    <Card.Text>
                      Note-Recording Embedded System Piano
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{backgroundColor:'#8795FA', borderColor:'#8795FA', fontWeight:'bold'}}
                      onClick={() => this.handleShow(2)}>
                      Learn More
                    </Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginBottom: '2rem'}}>
              <Card className='card'>
                <Card.Img src={foodblog}/>
                <Card.Body>
                    <Card.Title>Zoe's Food Bytes</Card.Title>
                    <Card.Text>
                      Gatsby Food Blog
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{backgroundColor:'#8795FA', borderColor:'#8795FA', fontWeight:'bold'}}
                      onClick={() => this.handleShow(10)}>
                      Learn More
                    </Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginBottom: '2rem'}}>
              <Card className='card'>
                <Card.Img src={utbs}/>
                <Card.Body>
                    <Card.Title>UT Bathroom Services</Card.Title>
                    <Card.Text>
                       UT Bathroom Reviews App
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{backgroundColor:'#8795FA', borderColor:'#8795FA', fontWeight:'bold'}}
                      onClick={() => this.handleShow(3)}>
                      Learn More
                    </Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginBottom: '2rem'}}>
              <Card className='card'>
                <Card.Img src={mastermindcard}/>
                <Card.Body>
                    <Card.Title>Mastermind Game</Card.Title>
                    <Card.Text>
                      Personal Java Project
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{backgroundColor:'#8795FA', borderColor:'#8795FA', fontWeight:'bold'}}
                      onClick={() => this.handleShow(4)}>
                      Learn More
                    </Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginBottom: '2rem'}}>
              <Card className='card'>
                <Card.Img src={chatprogram}/>
                <Card.Body>
                    <Card.Title>Chat Room</Card.Title>
                    <Card.Text>
                      Simple Java Chat Program
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{backgroundColor:'#8795FA', borderColor:'#8795FA', fontWeight:'bold'}}
                      onClick={() => this.handleShow(5)}>
                      Learn More
                    </Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginBottom: '2rem'}}>
              <Card className='card'>
                <Card.Img src={calculatorcard}/>
                <Card.Body>
                    <Card.Title>Calculator</Card.Title>
                    <Card.Text>
                      Personal Javascript Project
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{backgroundColor:'#8795FA', borderColor:'#8795FA', fontWeight:'bold'}}
                      onClick={() => this.handleShow(6)}>
                      Learn More
                    </Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginBottom: '2rem'}}>
              <Card className='card'>
                <Card.Img src={hangmancard}/>
                <Card.Body>
                    <Card.Title>Hangman Game</Card.Title>
                    <Card.Text>
                      Personal Python Project
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{backgroundColor:'#8795FA', borderColor:'#8795FA', fontWeight:'bold'}}
                      onClick={() => this.handleShow(7)}>
                      Learn More
                    </Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginBottom: '2rem'}}>
              <Card className='card'>
                <Card.Img src={nim}/>
                <Card.Body>
                    <Card.Title>Nim Game</Card.Title>
                    <Card.Text>
                      Personal Java Project
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{backgroundColor:'#8795FA', borderColor:'#8795FA', fontWeight:'bold'}}
                      onClick={() => this.handleShow(8)}>
                      Learn More
                    </Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginBottom: '2rem'}}>
              <Card className='card'>
                <Card.Img src={roommonitorcard}/>
                <Card.Body>
                    <Card.Title>Room Availability Monitor</Card.Title>
                    <Card.Text>
                      IBM Intern Hackathon 2018
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{backgroundColor:'#8795FA', borderColor:'#8795FA', fontWeight:'bold'}}
                      onClick={() => this.handleShow(9)}>
                      Learn More
                    </Button>
                  </Card.Body>
              </Card>
            </Col>
          </Row>

          <Modal centered show={this.state.modalShow[0]} onHide={() => this.handleClose(0)}>
            <Modal.Header closeButton>
              <Modal.Title>Stellar Spine</Modal.Title>
            </Modal.Header>
            <Carousel
              interval={null}
              activeIndex={this.state.imgCarousel}
              direction={this.state.direction}
              onSelect={this.handleSelect}
              nextIcon={<IconContext.Provider value={{ size: 40 }}>
                          <div style={{marginBottom: 30, color: 'grey'}}>
                            <BsChevronCompactRight/>
                          </div>
                        </IconContext.Provider>}
              prevIcon={<IconContext.Provider value={{ size: 40 }}>
                          <div style={{marginBottom: 30, color: 'grey'}}>
                            <BsChevronCompactLeft/>
                          </div>
                        </IconContext.Provider>}>
              <Carousel.Item>
                <ResponsiveEmbed aspectRatio="4by3">
                  <img src={sshome} alttext='home screen with percentage circle'/>
                </ResponsiveEmbed>
              </Carousel.Item>
              <Carousel.Item>
                <ResponsiveEmbed aspectRatio="4by3">
                  <img src={sschart} alttext='bar graph'/>
                </ResponsiveEmbed>
              </Carousel.Item>
              <Carousel.Item>
                <ResponsiveEmbed aspectRatio="4by3">
                  <img src={stellarspine} alttext='constellations'/>
                </ResponsiveEmbed>
              </Carousel.Item>
            </Carousel>
            <Modal.Body>
              <p><b>UT ECE Senior Capstone Design Project:</b> Created a real-time scoliosis
                brace compliance monitor in a team of 6 over the course of two semesters.
                The system consists of a sensor and a mobile application, and it allows users to view compliance
                data in real-time and receive incentives to wear their brace.
                The project received first place among the Honors/Entrepreneurial teams.</p>
              <p>I led the effort to create our mobile application which was built with React Native. I set up the app navigation routing,
                authentication, and various app modules. Additionally, the app uses the Google Firebase Realtime Database and Authentication.</p>
                <Button
                  variant="outline-secondary"
                  disabled={true}
                  className='skilltag'
                  style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                  React Native
                </Button>
                <Button
                  variant="outline-secondary"
                  disabled={true}
                  className='skilltag'
                  style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                  Firebase
                </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose(0)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.modalShow[1]} onHide={() => this.handleClose(1)} className='modal'>
            <Modal.Header closeButton>
              <Modal.Title>Air Thoughts</Modal.Title>
            </Modal.Header>
            <ResponsiveEmbed aspectRatio="16by9">
              <img src={airthoughts} alttext="bar graph"/>
            </ResponsiveEmbed>

            <Modal.Body>
              <p><b>HackTX 2018 Project:</b> Worked on a team of five to create a web application that
              identifies and leverages customer sentiments for American Airlines customers in real time.
              The app displays sentiment analysis of live conversations and parses keywords to understand
              the conversation topic and the associated sentiment. </p>
              <p>I primarily worked on the UI of the applicaton. The project was created using React, Material UI,
               Recharts, Flask, MongoDB, RevSpeech API, and the Microsoft Azure
              Text Analysis API. We placed in the top 10 projects overall and won third place for the American
              Airlines challenge.</p>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                React
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Material UI
              </Button>
              <br/><br/>
              <a href="https://github.com/david-bush/HackTX2018">Github Repository</a>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose(1)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.modalShow[2]} onHide={() => this.handleClose(2)} className='modal'>
            <Modal.Header closeButton>
              <Modal.Title>WiFi Piano</Modal.Title>
            </Modal.Header>
            <ResponsiveEmbed aspectRatio="16by9">
              <iframe width="498" height="300" src="https://www.youtube.com/embed/DqZtjWEB5SY"
              frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </ResponsiveEmbed>
            <Modal.Body>
              <p><b>EE 445L Final Project:</b> Worked with a partner to create an
              WiFi piano that would allows users to play notes and chords on the piano.
      				Users record the sequence of notes played and send it to a data logging server.
      				I worked on creating the data logging server, the notes, the DAC output, and soldering the components to the PCB.</p>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                C
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Python
              </Button>
              <br/><br/>
              <a href="https://ee445l-floorpiano.appspot.com">Link to Server</a><br/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose(2)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.modalShow[10]} onHide={() => this.handleClose(10)} className='modal'>
            <Modal.Header closeButton>
              <Modal.Title>Zoe's Food Bytes</Modal.Title>
            </Modal.Header>
            <ResponsiveEmbed aspectRatio="16by9">
              <img src={foodblogmodal} alttext="food blog hero"/>
            </ResponsiveEmbed>
            <Modal.Body>
              <p><b>Personal Project:</b> Created a food blog using Gatsby. I enjoy cooking and eating food,
              so I thought it would be fun to write about my adventures. In addition, I've been wanting to try out Gatsby,
              so it was a perfect storm.</p>
              <p>I used a Gatsby starter template allowing me to quickly develop the blog. Then
              I deployed my blog on Netlify which offers continuous deployment and Github integration. In addition,
              I use Netlify CMS to add blog posts and modify any content on the site.</p>
              <p> I am slowly adding blog posts about my food experiments and favorite spots,
              so check it out <a href="https://zoe-food-bytes.netlify.app/">here!</a></p>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                React
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Gatsby
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Netlify
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Netlify CMS
              </Button>
              <br/><br/>
              <a href="https://github.com/zoe-ng321/foodBlog">Github Repository</a><br/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose(2)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.modalShow[3]} onHide={() => this.handleClose(3)} className='modal'>
            <Modal.Header closeButton>
              <Modal.Title>UT Bathroom Services</Modal.Title>
            </Modal.Header>
            <ResponsiveEmbed aspectRatio="16by9">
              <iframe src="https://www.youtube.com/embed/q3W-MPyDkqY"
              frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </ResponsiveEmbed>
            <Modal.Body>
              <p><b>EE 461L Team Project:</b> Worked in a team of 4 to create an Android
              app that would allows users to find bathrooms and water fountains
              on the UT campus. Users can filter facilities by factors such as location and cleanliness
              and can leave reviews. </p>
              <p>I worked on integrating the app with Google Firebase, setting up
              Cloud Firestore noSQL database, and the Favorites activity.</p>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Java
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Android
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Firebase
              </Button>
              <br/><br/>
              <a href="https://github.com/dChunGit/UT-Bathroom-Services">Github Repository</a>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose(3)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.modalShow[4]} onHide={() => this.handleClose(4)} className='modal'>
            <Modal.Header closeButton>
              <Modal.Title>Mastermind Game</Modal.Title>
            </Modal.Header>
            <ResponsiveEmbed aspectRatio="4by3">
            <img src={mastermind} alttext="mastermind game"/>
            </ResponsiveEmbed>
            <Modal.Body>
              <p>Created Mastermind game using Java and JavaFX. Built off of text-based Mastermind
               game written for EE 422C assignment and added JavaFX elements.</p>
               <Button
                 variant="outline-secondary"
                 disabled={true}
                 className='skilltag'
                 style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                 Java
               </Button>
               <Button
                 variant="outline-secondary"
                 disabled={true}
                 className='skilltag'
                 style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                 JavaFX
               </Button>
               <br/><br/>
              <a href="https://github.com/zoe-ng321/MastermindJar">Github Repository</a>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose(4)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.modalShow[5]} onHide={() => this.handleClose(5)} className='modal'>
            <Modal.Header closeButton>
              <Modal.Title>Chat Room</Modal.Title>
            </Modal.Header>
            <ResponsiveEmbed aspectRatio="16by9">
            <img src={chatprogram} alttext="chat program"/>
            </ResponsiveEmbed>
            <Modal.Body>
              <p><b>EE 422C Partner Project:</b> Used socket programming, multithreading, JavaFX,
               and the observer design pattern in creating a Java chat program.
      				The chat program supports 1-1 chat, group chats, and public chats, and works across computers. </p>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Java
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                JavaFX
              </Button>
              <br/><br/>
      				<p><a href="https://github.com/zoe-ng321/ChatRoomJAR">Github Repository</a></p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose(5)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.modalShow[6]} onHide={() => this.handleClose(6)} className='modal'>
            <Modal.Header closeButton>
              <Modal.Title>Calculator</Modal.Title>
            </Modal.Header>
            <ResponsiveEmbed aspectRatio="16by9">
              <img src={calculator} alttext="calculator"/>
            </ResponsiveEmbed>
            <Modal.Body>
              <p>Created a calculator using HTML, CSS, and Javascript to learn concepts </p>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Javascript
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                HTML
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                CSS
              </Button>
              <br/><br/>
              <a href="https://github.com/zoe-ng321/Calculator">Github Repository</a>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose(6)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.modalShow[7]} onHide={() => this.handleClose(7)} className='modal'>
            <Modal.Header closeButton>
              <Modal.Title>Hangman Game</Modal.Title>
            </Modal.Header>
            <ResponsiveEmbed aspectRatio="4by3">
              <img src={hangman} alttext="hangman text"/>
            </ResponsiveEmbed>
            <Modal.Body>
              <p>Created a Hangman game using Python. </p>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Python
              </Button>
              <br/><br/>
              <a href="https://github.com/zoe-ng321/Hangman">Github Repository</a>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose(7)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.modalShow[8]} onHide={() => this.handleClose(8)} className='modal'>
            <Modal.Header closeButton>
              <Modal.Title>Nim Game</Modal.Title>
            </Modal.Header>
            <ResponsiveEmbed aspectRatio="16by9">
              <img src={nim} alttext="nim game" />
            </ResponsiveEmbed>
    				<Modal.Body>
              <p>Created a Nim game using Java and JavaFX. </p>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Java
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                JavaFX
              </Button>
              <br/><br/>
              <a href="https://github.com/zoe-ng321/Nim">Github Repository</a>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose(8)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.modalShow[9]} onHide={() => this.handleClose(9)} className='modal'>
            <Modal.Header closeButton>
              <Modal.Title>Room Availability Monitor</Modal.Title>
            </Modal.Header>
            <ResponsiveEmbed aspectRatio="16by9">
              <img src={roommonitor} alttext="wires and breadboard"/>
            </ResponsiveEmbed>
            <Modal.Body>
              <p>Created an Internet of Things room monitor that shows the availability of conference and phone rooms.
      				The hardware used includes the ESP8266 WiFi module and a motion sensor. The website consists of
      				a floor map with the rooms highlighted in either green or red, depending on the room status.
      				Debugged the hardware system to ensure the WiFi module connected to the REST API.
      				Worked in a team of five during a two day hackathon to develop the system.</p>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                React
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                C
              </Button>
              <Button
                variant="outline-secondary"
                disabled={true}
                className='skilltag'
                style={{color:'DARKSLATEBLUE', fontWeight:'bold'}}>
                Node.js
              </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose(9)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
            <IconContext.Provider value={{ size: 40 }}>
              <div style={{marginBottom: 30}}>
                <BsChevronCompactUp/>
                <div>Back to Top</div>
              </div>
            </IconContext.Provider>
          </Link>

      </div>
    );
  }
}
