function ReadyTicket({ name, email, git, file, onBack }) {
  return (
    <div>
      <section class="final">
        <div class="logo">
          <img src="assets/images/logo-full.svg" alt="" />
        </div>
        <div class="header">
          <h1>
            Congrats,{" "}
            <span style={{ color: "hsl(7, 88%, 67%)" }}> {name} </span> ! Your
            ticket is ready.
          </h1>
          <div class="inTicket">
            <h2>
              We've emailed your ticket to{" "}
              <span style={{ color: "hsl(7, 88%, 67%)" }}> {email} </span>
              and will send updates in the run up to the event.
            </h2>
          </div>
        </div>
        <div class="ticket">
          <div class="mainTicket">
            <div class="headerTicket">
              <div>
                <img src="assets/images/logo-mark.svg" alt="logo" />
              </div>
              <div class="">
                <div class="nameEvent">Coding Conf</div>
                <div class="dateEvent">Jan 31, 2025 / Austin, TX</div>
              </div>
            </div>
            <div class="userDate">
              <div>
                {file ? (
                  <img src={URL.createObjectURL(file)} alt="User Avatar" />
                ) : (
                  <img
                    src="assets/images/image-avatar.jpg"
                    alt="Default Avatar"
                  />
                )}
              </div>
              <div class="nameMail">
                <div class="fullname">{name}</div>
                <div class="git">
                  <img src="assets/images/icon-github.svg" alt="git" />
                  <div>@{git}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="numberTicket">#6521</div>
        </div>
      </section>
      <div className="backButton">
        <button onClick={onBack}>Come back to form</button>
      </div>
    </div>
  );
}

export default ReadyTicket;
