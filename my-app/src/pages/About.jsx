function About() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#6f52ffc5', minHeight: '100vh' }}>
      <h1 style={{color: '#041a38'}}>About Us</h1>

      <h2>The School of Information Technology aims to produce a graduate who:</h2>

      <table border="1" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Objectives</th>
            <th>Vision</th>
            <th>Missions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Applies and develops innovative methodologies in creating and managing computing solutions.</td>
            <td>In pursuit of perfection, the University of Baguio is committed to provide balanced quality education by nurturing academic excellence, relevant social skills, and ethical values in a fun learning environment.</td>
            <td>Educates individuals to be empowered professionals in a global community.</td>
          </tr>
          <tr>
            <td>Implement end-to-end encryption and maintain SOC2 compliance to protect user privacy.</td>   
            <td>Describes the future world your company helps create. It should be aspirational and long-term.</td> 
            <td>Defines what you do every day, who you serve, and how you do it better than others.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default About;
