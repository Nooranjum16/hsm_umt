import React from 'react'
import { Button, Overlay } from 'react-bootstrap';
import {Container ,Row ,Col} from 'react-bootstrap';
import styles from '../../../styles/About.module.css'
import {list} from '../../api/buttondata'
import Image from 'next/image'

 function Deanmsg() {
  return (
    <>
    <Container fluid className={styles.bgimg} style={{paddingTop:80 ,paddingLeft:230}}>
        <h1  className='text-white'style={{fontWeight:"bold",fontSize:60,textTransform:'uppercase'}}>Dean's message</h1>
        <div>
      {list.map(item =>(
        <Button style={{backgroundColor:'RGB(65,64,66)',border:'1px solid transparent'}} className='rounded-0 m-1 d-inlineblock btncls'  size="md" key={item.id}>
          <text>{item.title}</text>
          </Button>  
              ))}
          </div>
      </Container>
      <div className='w-95 mx-5 ' style={{position:"relative",bottom:40,fontweight: 500}}>
       <h4 className='bg-danger text-white py-4 px-5 '>Visionary and charismatic frontrunners redefining quality leadership</h4>
       </div> 

       {/* <div class="card bg-danger text-black rounded-0" >
                            <div class="card-body" style={{padding:20}}>
                                <h4 class="mb-0" style={{fontSize:25,fontweight:500}}>Visionary and charismatic frontrunners redefining quality leadership</h4>
                            </div>
                        </div> */}
                                     {/* dean's intro */}
         <Container  className='my-3 deanmsg' style={{position:'relative'}}>
            <Row>
            <Col lg={10} style={{position:"relative",background:'rgb(220,221,222)',color:'Bright Grey',fontSize:20, fontFamily:"Arial",paddingTop:40,paddingBottom:40,paddingRight:60,paddingLeft:40,lineHeight:1.5,fontWeight:500}}>
            <p>Disruption has emerged as new normal in today’s business environment. Every change brings reactions that trickle down to the workplace. To succeed in this ever-changing reality, where Pakistani businesses are the central growth to the economy, the need emerged for holistic business leaders who are flexible, adaptable, and always ready to deal with the uncertain scenarios in near future.</p>
            <p>At Dr Hasan Murad School of Management, we adopt the capabilities to deal with day-to-day challenges in the way we teach, share knowledge, perform research, and impart skills required in the ever-changing business environment.</p>
            </Col>
            <Col lg={2} style={{position:"absolute",top:70,right:30}}>
              <Image src={deanpic} className='img-fluid'></Image>
            </Col>
            </Row>
            </Container>   
                                            {/* history*/}
       <Container  className='deanhistory' style={{fontSize:18,fontFamily:"Arial",fontColor:'rgb(255,252,213)'}}>
        <Row className='mt-4'>
        <Col md={12}> 
        <p>Our core endeavors always remain clear- we seek to transform and influence society through knowledge, skills, to groom the next generations of leaders, and to develop a research culture that fulfills the requirements of academia, industry, and society.</p>
        <p>HSM’s broad portfolio of undergrad and graduate students are greatly desired by academia and industry in local and international markets. HSM attracts people from diverse backgrounds and helps them transform themselves to become holistic leaders in their respective fields. Our transformed students are enriched with confidence, a strong record of achievements in addition to self-discovery. HSM Executive MBA program offers a wide range of training that is customized for senior executives and managers.</p>
        <p>Recognizing the quality of our programs and our graduates, National Business Education Accreditation Council (NBEAC) has awarded the “W” category to our BBA and MBA programs. HSM has been recognized by News Week Asia as the Leading Business School in Asia 2020. We are also members of the International Association to Advance Collegiate Schools of Business (AACSB), Accreditation Council for Business Schools and Programs (ACBSP), and European Quality Improvement System (EQUIS), PRME, GBSN, and other prominent global accreditation bodies.</p>
        <p>Our research potential has been recognized by other universities around the world, our scholar’s research has been cited worldwide. Among our faculty of more than 72, we are proud of fortunate enough to have professionals who excel in both teaching and research. Most of them are very well qualified from renowned universities ranging from Australia, New Zealand, Austria, USA, UK, Germany, and Canada. Many have significant academic and industry experience and have served in corporate higher positions.</p>
        <p>Our growing community of alumni represents an enormous resource for our current students and professors to develop and maintain links in the industry. Our graduates have developed a continuous desire to learn and emerged as entrepreneurs that make them our ambassadors for a transformative school of management. When recruiters visit us, they are certain that they will find leaders with a global perspective within an ever-evolving and turbulent market.</p>
        <p>Located in the heart of Lahore, HSM is an exciting place to learn, grow and achieve higher goals. We welcome you to join the HSM family comprised of faculty, staff, students, and alumni who are helping others in shaping the future of business in Pakistan.</p>
        </Col>
        </Row>
       </Container>
      
    </>
  )
}
export default Deanmsg;
