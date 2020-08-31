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


export default class Projects extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      modalShow: Array(9).fill(false),
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
                      className='cardbutton'
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
                      className='cardbutton'
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
                      A Note-Recording Embedded System Piano
                    </Card.Text>
                    <Button
                      variant="primary"
                      className='cardbutton'
                      onClick={() => this.handleShow(2)}>
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
                      Android App for UT Bathroom Reviews
                    </Card.Text>
                    <Button
                      variant="primary"
                      className='cardbutton'
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
                      className='cardbutton'
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
                      className='cardbutton'
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
                      className='cardbutton'
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
                      className='cardbutton'
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
                      className='cardbutton'
                      onClick={() => this.handleShow(8)}>
                      Learn More
                    </Button>
                  </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginBottom: '2rem'}}>
              <Card className='card'>
                <Card.Body>
                    <Card.Title>Room Availability Monitor</Card.Title>
                    <Card.Text>
                      IBM Intern Hackathon 2018
                    </Card.Text>
                    <Button
                      variant="primary"
                      className='cardbutton'
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
                <img src={sshome} style={{width:250, marginLeft: 125}}/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={sschart} style={{width:250, marginLeft: 125}}/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={stellarspine} style={{width:250, marginLeft: 125}}/>
              </Carousel.Item>
            </Carousel>
            <Modal.Body>
              <p>UT ECE Senior Capstone Design Project: Created a real-time scoliosis
                brace compliance monitor in a team of 6 over the course of two semesters.
                The system consists of a sensor and a mobile application, and it allows users to view compliance
                data in real-time and receive incentives to wear their brace.
                The project received first place among the Honors/Entrepreneurial teams.</p>
              <p>I led the effort to create our mobile application which was built with React Native. I set up the app navigation routing,
                authentication, and various app modules. Additionally, the app uses the Google Firebase Realtime Database and Authentication.</p>
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
            <img src={airthoughts} style={{width:498}}/>
            <Modal.Body>
              <p>HackTX 2018 Project: Worked on a team of five to create a web application that
              identifies and leverages customer sentiments for American Airlines customers in real time.
              The app displays sentiment analysis of live conversations and parses keywords to understand
              the conversation topic and the sentiment associated with the topic. </p>
              <p>I primarily worked on the UI of the applicaton. The project was created using React, Material UI,
               Recharts, Flask, MongoDB, RevSpeech API, and the Microsoft Azure
              Text Analysis API. We placed in the top 10 projects overall and won third place for the American
              Airlines challenge, and we developed the project during the 24-hour hackathon.</p>
              <a href="https://github.com/david-bush/HackTX2018">Github Repository</a></Modal.Body>
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
            <iframe width="498" height="300" src="https://www.youtube.com/embed/DqZtjWEB5SY"
            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <Modal.Body>
              <p>EE 445L Final Project: Worked with a partner to create an
              WiFi piano that would allows users to play notes and chords on the piano.
      				Users record the sequence of notes played and send it to a data logging server.
      				I worked on creating the data logging server, the notes, the DAC output, and soldering the components to the PCB.</p>
      				<a href="https://ee445l-floorpiano.appspot.com">Link to Server</a>
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
            <iframe width="498" height="300" src="https://www.youtube.com/embed/q3W-MPyDkqY"
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Modal.Body>
              <p>EE 461L Team Project: Worked in a team of 4 to create an Android
              app that would allows users to find bathrooms and water fountains
              on the UT campus. Users can filter facilities by factors such as location and cleanliness
              and can leave reviews. </p>
              <p>I worked on integrating the app with Google Firebase, setting up
              Cloud Firestore noSQL database, and the Favorites activity.</p>
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
            <img src={mastermind} style={{height:400}}/>
            <Modal.Body>
              <p>Created Mastermind game using Java and JavaFX. Built off of text-based Mastermind
               game written for EE 422C assignment and added JavaFX elements.</p>
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
            <img src={chatprogram} style={{width:500}}/>
            <Modal.Body>
              <p>EE 422C Partner Project: Used socket programming, multithreading, JavaFX,
               and the observer design pattern in creating a Java chat program.
      				The chat program supports 1-1 chat, group chats, and public chats, and works across computers. </p>
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
            <img src={calculator} style={{width:250, marginLeft: 125}}/>
            <Modal.Body>
              <p>Created Calculator using HTML, CSS, and Javascript. </p>
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
            <img src={hangman} style={{width:500}}/>
            <Modal.Body>
              <p>Created a Hangman game using Python. </p>
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
            <img src={nim} style={{width:500}}/>
    				<Modal.Body>
              <p>Created a Nim game using Java and JavaFX. </p>
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
            <Modal.Body>
              <p>Created a Internet of Things room monitor that shows the availability of conference and phone rooms.
      				The hardware used includes the ESP8266 WiFi module and a motion sensor. The website consists of
      				a floor map with the rooms highlighted in green or red, depending on the room status.
      				Debugged the hardware system to ensure the WiFi module connected to the REST API.
      				Worked in a team of five during a two day hackathon to develop the system.</p>
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
