import React, {useState,useEffect} from 'react';
import User from './components/User';
import './styles/global.scss';

function App() {
  const [user,setUser] = useState(0);
  const [choosen,setChoosen] = useState<number | null>(null);
  const [data,setData] = useState([{Company: "",Email: "",EmailAddress: "",FirstNameLastName: "",ID: "",JobTitle: "" , Phone: ""}]);
  const [isFetching,setIsFetshing] = useState(true);

  useEffect(()=>{
    setIsFetshing(true)
    fetch(`https://give-me-users-forever.vercel.app/api/users/${user}/next`)
    .then(res => res.json())
    .then(data => {
      setData(data.users.slice(0,10))
      setChoosen(null)
    })
    .finally(()=> setIsFetshing(false))
  },[user])
  return (
    <main className="App container">
      <h1> Users list </h1>
      {isFetching ? 
        <div className='loading'><span></span></div>
      :
        <section className='users'>
          {data.map((userData , i) => <User 
            jobTitle= {userData.JobTitle} 
            name={userData.FirstNameLastName}  
            company={userData.Company}  
            email={userData.Email}  
            emailAddress={userData.EmailAddress}  
            phone={userData.Phone}  
            choosen={choosen === i} 
            setChoosen={setChoosen} 
            index={i}
          />)
          }
        </section>
      }
      <div className='BTNS'>
        <button className={`S-BTN ${isFetching? 'clicked':''} ${user < 10? 'disabled':''}`} onClick={()=> setUser(prev => prev < 10 ? prev: prev - 10)}>previous</button>
        <button className={`P-BTN ${isFetching? 'clicked':''}`} onClick={()=> setUser(prev => prev + 10)}>next</button>
      </div>
    </main>
  );
}

export default App;
