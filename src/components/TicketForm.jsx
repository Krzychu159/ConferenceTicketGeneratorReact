import { useState } from "react";
import ReadyTicket from "./ReadyTicket";

function TicketForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [git, setGit] = useState("");
  const [file, setFile] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <ReadyTicket
        name={name}
        email={email}
        git={git}
        file={file}
        onBack={() => setIsSubmitted(false)}
      />
    );
  }

  return (
    <section className="form">
      <div className="logo">
        <img src="/assets/images/logo-full.svg" alt="Logo" />
      </div>
      <div className="header">
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <h2>Secure your spot at next year's biggest coding conference.</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmitted(true);
        }}
      >
        <label>Upload Avatar</label>
        <label htmlFor="file-upload" className="custom-file-upload">
          <img src="/assets/images/icon-upload.svg" alt="Upload" />
          Drag and drop or click to upload
        </label>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />

        <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="email">E-mail Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="github">GitHub Username</label>
        <input
          type="text"
          name="github"
          id="github"
          placeholder="@yourusername"
          onChange={(e) => {
            setGit(e.target.value);
          }}
        />
        <button className="backButton">Generate My Ticket</button>
      </form>
    </section>
  );
}

export default TicketForm;
