function TicketForm() {
  return (
    <section class="final">
      <div class="logo">
        <img src="assets/images/logo-full.svg" alt="" />
      </div>
      <div class="header">
        <h1>
          Congrats, <span id="name"></span> ! Your ticket is ready.
        </h1>
        <div class="inTicket">
          <h2>
            We've emailed your ticket to <span id="mail"></span> and will send
            updates in the run up to the event.
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
              <img src="assets/images/image-avatar.jpg" alt="" />
            </div>
            <div class="nameMail">
              <div class="fullname">XXXXXXX</div>
              <div class="git">
                <img src="assets/images/icon-github.svg" alt="git" />
                <div>@XXXXXXX</div>
              </div>
            </div>
          </div>
        </div>
        <div class="numberTicket">#XXXX</div>
      </div>
    </section>
  );
}

export default TicketForm;
