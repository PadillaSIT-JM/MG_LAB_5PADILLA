import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form turned in!");
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Full Name: </label><br/>
          <input type="text" required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Course: </label><br/>
          <input type="text" required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Year Level: </label><br/>
          <input type="text" required />
        </div>

        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default Register;
