import "./App.css";

export default function Navbar({ scrollToSection }) {
  return (
    <>
      <div className="navbar">
        <div onClick={() => scrollToSection("section1Ref")}>ABOUT</div>
        <div onClick={() => scrollToSection("section2Ref")}>SKILLS</div>
        <div onClick={() => scrollToSection("section3Ref")}>CONTACT</div>
      </div>
    </>
  );
}
