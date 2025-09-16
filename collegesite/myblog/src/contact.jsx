// export default function Contact() {
//   return (
//     <div>
//       <h2>Contact Page 📩</h2>
//       <ul>
//         <li>Email: aveeena@gmail.com</li>
//         <li>Phone: +1234567890</li>
//         <li>Address: 123 Main St, NYC City, USA</li>
//       </ul>
//     </div>
//   );
// }
import { useState } from "react";

export default function Contact() {
  const [student, setStudent] = useState({
    name: "",
    major: "",
    year: "",
    interests: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Details Submitted:\nName: ${student.name}\nMajor: ${student.major}\nYear: ${student.year}\nInterests: ${student.interests}`);
  };

  return (
    <div>
      <h2>Contact / Student Info Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={student.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Major: </label>
          <input name="major" value={student.major} onChange={handleChange} required />
        </div>
        <div>
          <label>Year/Class: </label>
          <input name="year" value={student.year} onChange={handleChange} required />
        </div>
        <div>
          <label>Interests: </label>
          <input name="interests" value={student.interests} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
