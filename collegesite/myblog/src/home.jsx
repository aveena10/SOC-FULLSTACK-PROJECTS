// export default function Home() {
//   return <h2>Welcome to the Home Page 🏠</h2>;
// }

// export default function Home() {
//   return(
//   <div>
//   <h2>Welcome to the Home Page 🏠</h2>
    
//     <p><i>This webpage belongs to miss AVEENA CHOPRE GOWD</i></p>
//   </div>)
// }
//  function Home() {
//   const [name, setName] = useState("");
// const[message,setMessage]=useState("");
// const handleSubmit=(e)=>{
//   e.preventDefault();
//   alert(`Hello, ${name}! Welcome to the Home Page your messaage is $ 🏠`);
// }

// <h1><form action=""></form></h1>
// <form onSubmit={handleSubmit}>
//   <

// import { useState } from "react";

// export default function Home() {
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Hello, ${name}! Your message is: ${message} 🏠`);
//   };

//   return (
//     <div>
//       <h2>Welcome to the Home Page 🏠</h2>
//       <p><i>This webpage belongs to miss AVEENA CHOPRE GOWD</i></p>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name: </label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Message: </label>
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
//........................................................................................
// export default function Home() {
//   return (
//     <div>
//       <h2>Welcome to Our College 🏫</h2>
//       <p><i>This is the official student portal</i></p>
//     </div>
//   );
// }

// export default function Home() {
//   const blogs = [
//     {
//       title: "Welcome to Our College Portal",
//       content: "This portal is designed to help students access important info about the college and themselves.",
//       image: "https://images.unsplash.com/photo-1581091215361-6d46f3f5b85e?auto=format&fit=crop&w=800&q=60"
//   },
  
//     {
//       title: "Upcoming Events",
//       content: "Check out our upcoming workshops, seminars, and tech fests!",
//       image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=60"
//   },
  

//     {
//       title: "Student Achievements",
//       content: "Read about the latest accomplishments of our brilliant students.",
//       image: "https://images.unsplash.com/photo-1581090700227-ffb9354d23fa?auto=format&fit=crop&w=800&q=60"
//     }
//   ];

//   return (
//     <div>
//       <h2>Welcome to Our College 🏫</h2>
//       <p><i>This is the official student portal</i></p>

//       <h2>Blogs 📝</h2>
//       <div className="blogs">
//         {blogs.map((blog, index) => (
//           <div key={index} className="card">
//             <h3>{blog.title}</h3>
//             <p>{blog.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   const blogs = [
//     {
//       title: "Welcome to Our College Portal",
//       content: "This portal is designed to help students access important info about the college and themselves.",
//       image:"https://share.google/images/feyHY5SI14SqwaffX"
//     },
//     {
//       title: "Upcoming Events",
//       content: "Check out our upcoming workshops, seminars, and tech fests!",
//       image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=60"
//     },
//     {
//       title: "Student Achievements",
//       content: "Read about the latest accomplishments of our brilliant students.",
//       image: "https://images.unsplash.com/photo-1581090700227-ffb9354d23fa?auto=format&fit=crop&w=800&q=60"
//     }
//   ];

//   return (
//     <div>
//       <h2>Welcome to Our College 🏫</h2>
//       <p><i>This is the official student portal</i></p>

//       <h2>Blogs 📝</h2>
//       <div className="blogs">
//         {blogs.map((blog, index) => (
//           <div
//             key={index}
//             className="card blog-card"
//             style={{
//               backgroundImage: `url(${blog.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               color: "white",
//             }}
//           >
//             <h3>{blog.title}</h3>
//             <p>{blog.content}</p>
//           </div>
//         ))}

//   );      </div>
//     </div>


export default function Home() {
  const blogs = [
    {
      title: "Welcome to Our College Portal",
      content: "This portal is designed to help students access important info about the college and themselves.",
      image:"https://leapscholar.com/blog/wp-content/uploads/2022/03/shutterstock_1105152176-min.png"
    },
    {
      title: "Upcoming Events",
      content: "Check out our upcoming workshops, seminars, and tech fests!",
  image: "https://assets-wp.boundless.com/uploads/2021/07/AdobeStock_221161817-scaled.jpeg"
},
    {
      title: "Student Achievements",
      content: "Read about the latest accomplishments of our brilliant students.",
      image: "https://cdn.listening.com/tim-alex-JYqLCa-rv7o-unsplash.jpg"
    }
  ];

  return (
    <div>
      <h2>Welcome to Our College 🏫</h2>
      <p><i>This is the official student portal</i></p>

      <h2>Blogs 📝</h2>
      <div className="blogs">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="card blog-card"
            style={{
              backgroundImage: `url(${blog.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "10px",
            }}
          >
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

