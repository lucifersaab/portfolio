import "./App.css";
import Navbar from "./Navbar";
import Main from "./main";
import Whatsapp from "./Whatsapp";
import Contact from "./Contact";
import Start from "./Start.js";
import { useRef, useState } from "react";
function App() {
  const [page, setPage] = useState("first");

  const updatePage = (val) => {
    setPage(val);
  };
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    console.log(sectionRef);
    let sr;
    if (sectionRef === "section1Ref") {
      sr = section1Ref;
    } else if (sectionRef === "section2Ref") {
      sr = section2Ref;
    } else {
      sr = section3Ref;
    }
    if (sr.current) {
      sr.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {page !== "third" ? (
        <Start setPage={updatePage} page={page}></Start>
      ) : (
        <div className="theme">
          <Navbar scrollToSection={scrollToSection}></Navbar>
          <Main section1Ref={section1Ref} section2Ref={section2Ref}></Main>
          <Whatsapp></Whatsapp>
          <Contact></Contact>
          <div ref={section3Ref}></div>
        </div>
      )}
    </>
  );
}

export default App;
