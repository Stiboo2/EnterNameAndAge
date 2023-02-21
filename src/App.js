import React,{useState} from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UsersList';


function App() {
  const [userList, setUserList]=useState([]);
  const AddUserHandler =(uName, uAge)=>{
    setUserList((prevUserList)=>{
return [...prevUserList,{name: uName, age: uAge, id: Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser OnAddUser={AddUserHandler} />
      <UserList users={userList}/>
    </div>
  );
}

export default App;
