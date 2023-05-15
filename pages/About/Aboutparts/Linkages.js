import { Button, Row ,Col} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import styles from '../../../styles/About.module.css'
import {list} from '../../api/buttondata'
import Image from 'next/image'
import Link from 'next/link'
import L1 from '../../../public/Images/L1.png'
import L2 from '../../../public/Images/L2.jpg'
import L3 from '../../../public/Images/L3.png'
import L4 from '../../../public/Images/L4.png'
import L5 from '../../../public/Images/L5.png'
import L6 from '../../../public/Images/L6.png'
import L7 from '../../../public/Images/L7.png'
import React, { useState } from 'react';

 function Linkages() {
  const [isActive, setIsActive] = useState(false);

  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];
  return (
    <>
    <Container fluid >
      <Row>
        <Col lg={2} sm={12} className='bg-danger'>1234</Col>
        <Col className={styles.bgimg}>
        <h1 className={styles.Lheading}>international linkages</h1>
        <div style={{paddingTop:70 ,paddingLeft:120}}>
        <div className='mt-5'>
      {list.map(item =>(
        <Button id={styles.btncls} key={item.id}>
          <text>{item.title}</text>
          </Button>  
              ))}
          </div>
          <div className={styles.Card}>
       <h4 className='py-4 px-4'>Providing meaningful insights for global business leadership</h4>
       </div> 
        </div>
      {/* <div className={styles.Card}>
       <h4 className='py-4 px-4'>Providing meaningful insights for global business leadership</h4>
       </div>   */}
       <Container md={12} className=' text-area'>
        <p className={styles.pheading} style={{marginTop:35}}>Internationalization is one of the main focus areas at HSM. Internationalization prepares graduates with cross cultural consciousness and international competencies to succeed in an increasingly internationalized and competitive business world. The Office of Internationalization (OIN) at UMT plays a key role in this regard.</p>
        <h4 className={styles.h4heading}>Our International Partners</h4>
        <p className={styles.pheading}>Bilateral agreements are signed for the international mobility of students and faculty with Northeastern Illinois University (NEIU) Chicago USA, USAK University Turkey, Tianjin Polytechnic University (TJPU) China, Wuhan University of Technology (WUT) China, Istanbul Aydin University (IAU) Turkey and University of Nottingham (UoN) Malaysia.</p>
        <Row>
       <Col  md={4} className={styles.zoom}>
       <Link href="https://www.neiu.edu/" legacyBehavior>
      <Image src={L1} alt="L1" className='img-fluid w-100'style={{padding:60}}></Image>
      </Link>
     </Col>
            <Col  md={4} className={styles.zoom} >
              <Link href="https://www.neiu.edu/" legacyBehavior>
              <Image  src={L2} alt="L1" className='img-fluid w-100'style={{padding:60}}></Image> 
              </Link>
            </Col>
            <Col  md={4} className={styles.zoom}> 
              <Link href='https://www.usak.edu.tr/Home/Index/Ingilizce' legacyBehavior>
              <Image  src={L3} alt="L1" className='img-fluid w-100' style={{padding:60}} ></Image>
              </Link>
            </Col>
        </Row>
        <br></br>
        <Row>
            <Col md={4} className={styles.zoom} >
              <Link href='https://www.usak.edu.tr/Home/Index/Ingilizce' legacyBehavior>
              <Image  src={L4} alt="L1" className='img-fluid w-100' style={{padding:60}}></Image>  
              </Link>
            </Col>
            <Col  md={4} className={styles.zoom} >
              <Link href='https://www.aydin.edu.tr/en-us/Pages/default.aspx' legacyBehavior>
              <Image  src={L5} alt="L1" className='img-fluid w-100'style={{padding:60}}></Image>
              </Link>
            </Col>
            <Col md={4} className={styles.zoom}>
              <Link href='https://www.nottingham.ac.uk/' legacyBehavior>
              <Image   src={L6} alt="L1" className='img-fluid w-100'style={{padding:60}}></Image>
              </Link>
            </Col>
        </Row>
       </Container>
       <Container fliud className='mt-5'>
                 <Row>
             <Col md={12}>
          <Image src={L7} class="img-fluid"></Image>
               </Col>
             </Row>
        </Container>
        <br></br>
        </Col>
      </Row>
    </Container>
    </>
  )
}
export default Linkages;