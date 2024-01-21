export default function Contact() {
  return (
    <>
      <div className="centered-div" style={{ fontSize: "30px" }}>
        CONTACT DETAILS
      </div>

      <div className="centered-div">
        <div className="form-container">
          <form>
            <div className="centered-div" style={{ fontSize: "25px" }}>
              Let's get in touch!
            </div>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter you name"></input>
            </div>
            <div>
              <label>Email</label>
              <input type="mail" placeholder="Enter your email"></input>
            </div>
            <div>
              <label>Message</label>
              <input placeholder="Please enter your query"></input>
            </div>
            <div>
              <button className="sendBtn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
