
import React from 'react';
import { Hello, Student } from './Student';
import Button from './Button';
import { Header, Content, Footer } from './Layout';
import SpaNav from './SpaNav';
import { Message, ProfileCard } from './Profile';

function App() {
  const parentMessage = "Study React Daily";

  return (
    <div style={{ padding: '20px' }}>
      {/* Ex 1 */}
      <Hello />
      <hr />

      {/* Ex 2 */}
      <Student name="Rahul" className="7" />
      <hr />

      {/* Ex 3 */}
      <Button text="Login" />
      <Button text="Register" />
      <Button text="Logout" />
      <hr />

      {/* Ex 4 */}
      <Header />
      <Content />
      <Footer />
      <hr />

      {/* Ex 5 */}
      <SpaNav />
      <hr />

      {/* Ex 6 */}
      <Message text={parentMessage} />
      <hr />

      {/* Ex 7 */}
      <ProfileCard name="Anaya" age="12" favSubject="Science" />
    </div>
  );
}

export default App;