import { useState } from "react";
import ReadyTicket from "./ReadyTicket";

function TicketForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [git, setGit] = useState("");
  const [file, setFile] = useState("");
  const [errors, setErrors] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Full Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "E-mail Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!git.trim()) {
      newErrors.git = "GitHub Username is required";
    } else if (!/^@.+/.test(git)) {
      newErrors.git = "Invalid GitHub username format";
    }
    if (!file) {
      newErrors.file = "Please upload an avatar";
    } else if (!file.type.startsWith("image/")) {
      newErrors.file = "File must be an image (JPG or PNG)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
          if (validateForm()) {
            setIsSubmitted(true);
          }
        }}
      >
        <label>Upload Avatar</label>
        <label htmlFor="file-upload" className="custom-file-upload">
          <img
            src={
              file
                ? "/assets/images/icon-done.svg"
                : "/assets/images/icon-upload.svg"
            }
            alt="Upload"
          />
          {file
            ? "Image attached correctly"
            : "Drag and drop or click to upload"}
        </label>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        {errors.file ? (
          <p className="error">{errors.file}</p>
        ) : (
          <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
        )}

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {errors.name && <p className="error">{errors.name}</p>}

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
        {errors.email && <p className="error">{errors.email}</p>}

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
        {errors.git && <p className="error">{errors.git}</p>}

        <button className="backButton">Generate My Ticket</button>
      </form>
    </section>
  );
}

export default TicketForm;
