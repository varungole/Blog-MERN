import React, { useEffect , useState } from 'react'
import Blog from './Blog'
import { useNavigate } from 'react-router-dom';
import useStore from './useStore';

function ComputerScience() {
  const[data , setData] = useState([]);

  const store = useStore();



useEffect(() => {
  const url = "http://localhost:4050/blogs";

  const fetchData = async() => {
    try{
      const response = await fetch(url);
      const json = await response.json();
      const filteredHistory = json.filter((item => item.genre === "ComputerScience"));
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
  await fetch('http://localhost:4050/blogs', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      _id: _id,
    }),

   
  });
  window.location.reload(true);
};



  return (
    <div className='main-page'>
      <h1 className='contribution'>Want to create your own blog? <a href='/contribute'>Contribute here!</a></h1>

  <div className='world-history-blogs'>
  {data.map((obj, index) => (
        <Blog title={obj.title} description={obj.description} onClick={()=> {handleClick(obj.title , obj.actualBlog , obj.description , obj.author, obj.genre)}} onDeleteClick={() => {deleteClick(obj._id)}}/>
      ))}
  
  </div>
  </div>
  )
}

export default ComputerScience