import "../styles/contact.css";

const Contact = () => {
  return (
    <section class="contact">
      <p>contact</p>
      <form action="">
        <input type="text" placeholder="Name*" required />
        <input type="email" placeholder="Email*" required />
        <input type="text" placeholder="Message*" required />
        <button>submit</button>
      </form>
    </section>
  );
};

export default Contact;
