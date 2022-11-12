const Contact = () => {
  return (
    <section class="contact">
      <h2 className="capitalize">contact</h2>
      <form className="m-5 flex flex-col" action="">
        <input
          type="text"
          placeholder="Name*"
          className="outline-none  m-2 p-2 text-input-text text-lg border-b-2  hover:border-input-border focus:border-input-border transition duration-300 ease-in-out bg-intro-background "
          required
        />
        <input
          type="email"
          placeholder="Email*"
          className="outline-none  m-2 p-2 text-input-text  text-lg border-b-2 hover:border-input-border focus:border-input-border transition duration-300 ease-in-out bg-intro-background "
          required
        />
        <input
          type="text"
          placeholder="Message*"
          className="outline-none  m-2 p-2 text-input-text  text-lg border-b-2 hover:border-input-border focus:border-input-border transition duration-300 ease-in-out bg-intro-background "
          required
        />
        <button className="">submit</button>
      </form>
    </section>
  );
};

export default Contact;
