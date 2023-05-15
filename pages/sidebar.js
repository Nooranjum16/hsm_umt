import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styleside from "../styles/sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import sidebarimg from "../public/Images/sidebarimg.png";
import { Container } from "react-bootstrap";

function Sidebar() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  function toggleList(index) {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // close current submenu
    } else {
      setExpandedIndex(index); // expand clicked submenu
      // close all other submenus
      [...document.querySelectorAll(".has-submenu")].forEach((item, i) => {
        if (i !== index) {
          item.classList.remove("expanded");
        }
      });
    }
  }

  return (
    <aside>
      <div className={styleside.sidebarheader}>
        <Link href="https://hsm.umt.edu.pk/" legacyBehavior>
          <Image src={sidebarimg} alt="HSM" className="img-fluid"></Image>
        </Link>
      </div>
      <nav>
        <ul className={styleside.menuitems}>
          <li>Home</li>
          <li
            className={
              expandedIndex === 0 ? "has-submenu expanded" : "has-submenu"
            }
            onClick={() => toggleList(0)}
          >
            <span style={{ float: "right" }}>
              {expandedIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            About HSM
            {expandedIndex === 0 && (
              <ul className={styleside.submenu}>
                <li>The School</li>
                <li>Vision and Mission</li>
                <li>Dean's Message</li>
                <li>Accreditation and Memberships</li>
                <li>International Linkages</li>
                <li>UMT Rankings</li>
              </ul>
            )}
          </li>
          <li
            className={
              expandedIndex === 1 ? "has-submenu expanded" : "has-submenu"
            }
            onClick={() => toggleList(1)}
          >
            <span style={{ float: "right" }}>
              {expandedIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            Academics
            {expandedIndex === 1 && (
              <ul className={styleside.submenu}>
                <li>Departments</li>
                <li>Executive Centers</li>
              </ul>
            )}
          </li>
          <li
            className={
              expandedIndex === 2 ? "has-submenu expanded" : "has-submenu"
            }
            onClick={() => toggleList(2)}
          >
            <span style={{ float: "right" }}>
              {expandedIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            Study Program
            {expandedIndex === 2 && (
              <ul className={styleside.submenu}>
                <li>Undergraduate</li>
                <li>Post ADP Program</li>
                <li>Graduate</li>
                <li>Doctorals Programs</li>
                <li>Graduate Handbook</li>
              </ul>
            )}
          </li>
          <li>Fee Sturcture</li>
          <li>Course Outline</li>
          <li
            className={
              expandedIndex === 3 ? "has-submenu expanded" : "has-submenu"
            }
            onClick={() => toggleList(3)}
          >
            <span style={{ float: "right" }}>
              {expandedIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            Faculty & Research
            {expandedIndex === 3 && (
              <ul className={styleside.submenu}>
                <li>Faculty Directory</li>
                <li>Journals</li>
                <li>Publications</li>
                <li>Conferences and Seminars</li>
              </ul>
            )}
          </li>
          <li>Alumni Network</li>
          <li>News and Stories</li>
          <li>HSM Review</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </aside>
  );
}
export default Sidebar;

// function toggleList(index) {
//   if (expandedIndex === index) {
//     setExpandedIndex(-1); // close current submenu
//   } else {
//     setExpandedIndex(index); // expand clicked submenu
//   }
// }

// import Image from "next/image";
// import Link from "next/link";
// import sidebarimg from "../public/Images/sidebarimg.png";
// function Sidebar() {
//   return (
//     <>
//       <div className={styleside.sidebarheader}>
//         <Link href="https://hsm.umt.edu.pk/" legacyBehavior>
//           <Image src={sidebarimg} alt="HSM" className="img-fluid"></Image>
//         </Link>
//       </div>
//       <nav>
//         <ul className={styleside.menuitems}>
//           <li>Home</li>
//           <li>
//             About HSM
//             <ul>
//               <li>The School</li>
//               <li>Vision and Misiion</li>
//               <li>Dean's Message</li>
//               <li>Accreditations and Memberships</li>
//               <li>International Linkages</li>
//               <li>UMT Rankings</li>
//             </ul>
//           </li>
//           <li>
//             Academics
//             <ul>
//               <li>Departments</li>
//               <li>Executive Centers</li>
//             </ul>
//           </li>
//           <li>
//             Study Program
//             <ul>
//               <li>The School</li>
//               <li>Vision and Misiion</li>
//               <li>Dean's Message</li>
//               <li>Accreditations and Memberships</li>
//               <li>International Linkages</li>
//             </ul>
//           </li>
//           <li>Fee Sturcture</li>
//           <li>Course Outline</li>
//           <li>
//             Faculty & Research
//             <ul>
//               <li>The School</li>
//               <li>Vision and Misiion</li>
//               <li>Dean's Message</li>
//               <li>Accreditations and Memberships</li>
//             </ul>
//           </li>
//           <li>Alumni Network</li>
//           <li>News and Stories</li>
//           <li>HSM Review</li>
//           <li>Contact US</li>
//         </ul>

//         <ul>
//           <li>
//             <Link>
//               <a>Home</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/About/about2" legacyBehavior>
//               <a>About HSM</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/about2" legacyBehavior>
//               <a>Academic</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/about2" legacyBehavior>
//               <a>Study Program</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/about2" legacyBehavior>
//               Fee Sturcture
//             </Link>
//           </li>
//           <Link href="/about2" legacyBehavior>
//             <a>Course Outline</a>
//           </Link>
//         </ul>
//       </nav>
//     </>
//   );
// }
// export default Sidebar;

// import { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import styleside from "../styles/sidebar.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import sidebarimg from "../public/Images/sidebarimg.png";

// function Sidebar() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   function toggleList() {
//     setIsExpanded(!isExpanded);
//   }

//   return (
//     <aside>
//       <div className={styleside.sidebarheader}>
//         <Link href="https://hsm.umt.edu.pk/" legacyBehavior>
//           <Image src={sidebarimg} alt="HSM" className="img-fluid"></Image>
//         </Link>
//       </div>
//       <nav>
//         <ul className={styleside.menuitems}>
//           <li>Home</li>
//           <li className="has-submenu">
//             <span onClick={toggleList} style={{ float: "right" }}>
//               {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
//             </span>
//             About HSM
//             {isExpanded && (
//               <ul className="submenu">
//                 <li>The School</li>
//                 <li>Vision and</li>
//                 <li>Subitem 3</li>
//                 <li>Subitem 2</li>
//                 <li>Subitem 3</li>
//                 <li>Subitem 2</li>
//               </ul>
//             )}
//           </li>
//           <li className="has-submenu">
//             <span onClick={toggleList} style={{ float: "right" }}>
//               {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
//             </span>
//             Academics
//             {isExpanded && (
//               <ul className="submenu">
//                 <li>Subitem 1</li>
//                 <li>Subitem 2</li>
//               </ul>
//             )}
//           </li>
//           <li className="has-submenu">
//             <span onClick={toggleList} style={{ float: "right" }}>
//               {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
//             </span>
//             Study Program
//             {isExpanded && (
//               <ul className="submenu">
//                 <li>Subitem 1</li>
//                 <li>Subitem 2</li>
//                 <li>Subitem 3</li>
//                 <li>Subitem 2</li>
//                 <li>Subitem 3</li>
//                 <li>Subitem 2</li>
//               </ul>
//             )}
//           </li>
//           <li>Fee Sturcture</li>
//           <li>Course Outline</li>
//           <li className="has-submenu">
//             <span onClick={toggleList} style={{ float: "right" }}>
//               {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
//             </span>
//             Faculty & Research
//             {isExpanded && (
//               <ul className="submenu">
//                 <li>Subitem 1</li>
//                 <li>Subitem 2</li>
//                 <li>Subitem 3</li>
//                 <li>Subitem 2</li>
//                 <li>Subitem 3</li>
//                 <li>Subitem 2</li>
//               </ul>
//             )}
//           </li>
//           <li>Alumni Network</li>
//           <li>News and Stories</li>
//           <li>HSM Reviews</li>
//           <li>Contact US</li>
//         </ul>
//       </nav>
//     </aside>
//   );
// }
// export default Sidebar;
