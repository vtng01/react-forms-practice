import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [phoneType, setPhoneType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const contactUsInfo = {
      name,
      email,
      phone,
      comments,
      phoneType,
      submittedOn: new Date(),
    };

    console.log(contactUsInfo);

    setName("");
    setEmail("");
    setPhone("");
    setComments("");
    setPhoneType("");
  };
  return (
    <section className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <section>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </section>
        <section>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </section>
        <section>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </section>
        <section>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
        </section>
        <button>Submit</button>
      </form>
    </section>
  );
}
