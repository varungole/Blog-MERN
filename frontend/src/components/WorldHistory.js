    import React, { useEffect , useState } from 'react'
    import Blog from './Blog'
    import { useNavigate } from 'react-router-dom';
    import useStore from './useStore';

    function WorldHistory() {
      const[data , setData] = useState([]);
      const store = useStore();
      const API_URL = "http://localhost:4050/blogs";

    useEffect(() => {
      const fetchData = async() => {
        try {
          const response = await fetch(API_URL);
          const json = await response.json();
          const filteredHistory = json.filter((item) => item.genre === "History");
          setData(filteredHistory);
        } catch(error) {
          console.log("error", error);
        }
      };

      fetchData();
    } , []);

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

    const navigate = useNavigate();

    const handleClick = (title , actualBlog , description ,author , genre) => {
      navigate('/blog',{state:{title:title,actualBlog:actualBlog , description:description , author:author , genre:genre}});
      }

    const deleteClick = async (_id) => {
      await fetch(API_URL, {
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
          <h1 className='contribution'>Want to create your own blog? <div onClick={handleContribute}>Contribute here!</div></h1>
      <div className='world-history-blogs'>
      {data.map((obj  ) => (
            <Blog key={obj._id} title={obj.title} description={obj.description} onClick={()=> {handleClick(obj.title , obj.actualBlog , obj.description , obj.author, obj.genre)}} onDeleteClick={() => {deleteClick(obj._id)}}/>
          ))}
      </div>
      </div>
      )
    }

    export default WorldHistory