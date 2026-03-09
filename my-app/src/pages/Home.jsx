import { Link } from 'react-router-dom';

function Home() {
  const links = [
    {
      title: "Register for Classes",
      desc: "Enroll for the upcoming semester.",
      btn: "Register Now",
      path: "/register"
    },
    {
      title: "Check Grades",
      desc: "View your academic performance.",
      btn: "Access Now",
      path: "/grades"
    },
    {
      title: "Campus Events",
      desc: "Stay updated on university activities.",
      btn: "View Future Events",
      path: "/events"
    }
  ];

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#c48cff', minHeight: '100vh', padding: '40px' }}>
      <h1 style={{ color: "#9B0AF7" }}>
        WELCOME TO THE DEPARTMENT OF INFORMATION TECHNOLOGY HOME PAGE
      </h1>

      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        {links.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '20px', flex: 1 }}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <Link to={item.path}>
              <button>{item.btn}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
