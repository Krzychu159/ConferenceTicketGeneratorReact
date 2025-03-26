function TicketForm() {
  return (
    <section className="form">
      <div className="logo">
        <img src="/assets/images/logo-full.svg" alt="Logo" />
      </div>
      <div className="header">
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <h2>Secure your spot at next year's biggest coding conference.</h2>
      </div>
      <form>
        <label>Upload Avatar</label>
        <label htmlFor="file-upload" className="custom-file-upload">
          <img src="/assets/images/icon-upload.svg" alt="Upload" />
          Drag and drop or click to upload
        </label>
        <input type="file" id="file-upload" />

        <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">E-mail Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
        />
        <label htmlFor="github">GitHub Username</label>
        <input
          type="text"
          name="github"
          id="github"
          placeholder="@yourusername"
        />
        <button>Generate My Ticket</button>
      </form>
    </section>
  );
}

export default TicketForm;
