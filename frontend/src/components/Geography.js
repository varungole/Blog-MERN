import React, { useEffect , useState } from 'react'
import Blog from './Blog'
import { useNavigate } from 'react-router-dom';
import useStore from './useStore';

function Geography() {
  const[data , setData] = useState([]);
  const store = useStore();
  const API_URL = "http://localhost:4050/blogs";


useEffect(() => {

  const fetchData = async() => {
    try{
      const response = await fetch(API_URL);
      const json = await response.json();
      const filteredHistory = json.filter((item => item.genre === "Geography"));
    setData(filteredHistory);
    }catch(error) {
      console.log("error" , error);
    }
  };

  fetchData();
} , []);

const navigate = useNavigate();

const handleClick = (title , actualBlog , description ,author , genre) => {
  
navigate('/blog',{state:{title:title,actualBlog:actualBlog , description:description , author:author , genre:genre}});
}

const deleteClick = async (_id) => {
  try{
  await fetch(API_URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      _id: _id,
    }),
  });
  navigate('/');
} catch(err) {
  console.log(err);
}
 
};

const handleContribute = () => {
  if(store.isLoggedIn === false)
  {
    alert('Please login to contribute');
    navigate('/login' , {state : {isLoggedIn : store.isLoggedIn , username : store.name}});
  }
  else
  {
    navigate('/contribute' , {state : {isLoggedIn : store.isLoggedIn , username : store.name}})
  }
}

  return (
    <div className='main-page'>
      <h1 className='contribution'>Want to create your own blog? <div onClick={handleContribute}>Contribute here!</div></h1>
  <div className='world-history-blogs'>
  {data.map((obj, index) => (
        <Blog key={index} title={obj.title} description={obj.description} onClick={()=> {handleClick(obj.title , obj.actualBlog , obj.description , obj.author, obj.genre)}} onDeleteClick={() => {deleteClick(obj._id)}}/>
      ))}
  
  </div>
  </div>
  )
}

export default Geography