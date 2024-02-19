import React, { useContext, useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import axios from 'axios'
import { dataContext } from './Context';
import { Link } from 'react-router-dom';
import Loader from './Loader';

function LanguageSection() {

  let {language,setLanguage} = useContext(dataContext);

  let [inputValue, setInputValue] = useState("");
  let [languages, setLanguages] = useState([]);
  let [loading, setLoading] = useState(true);
  let [searchResults, setSearchResults] = useState([]);

  function handleForm(e) {
    e.preventDefault();
  }

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleSearchResults() {
    var filteredArray = languages.filter(function (language) {
      return (language.name.toLowerCase().startsWith(inputValue));
    })
    

    if(inputValue === "")
    {
      filteredArray = [];
    }
    

    setSearchResults(filteredArray)

  }

  function handleLanguageChange(language)
  {
     setLanguage(language);
  }





const options = {
  method: 'GET',
  url: 'https://online-code-compiler.p.rapidapi.com/v1/languages/',
  headers: {
    'X-RapidAPI-Key': 'fb6500d97cmsh50290af7129a70dp1aaa31jsned59059e72c1',
    'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
  }
};


  

  async function getLanguages() {
    try {
      const response = await axios.request(options);
      setLanguages(response.data)
    } catch (error) {
      console.error(error);
    }
    finally{
         setLoading(false);
    }
  }

  useEffect(function () {

    getLanguages();

  }, [])

  useEffect(function()
  {
    handleSearchResults();
  },[inputValue])



  return (
    <div className=' w-screen  flex flex-col p-5 gap-5 mt-5 items-center overflow-hidden'>

      <form onSubmit={handleForm} className='relative py-3 px-2 rounded-md bg-[#EEE8F4] text-black  flex  items-center justify-between w-[100%] md:w-[80%]'>

        <input value={inputValue} type="text" placeholder='Search Programming Language....' className='outline-none font-medium bg-transparent w-[20rem]  md:w-[60%] py-2 rounded-md pl-2 ' onChange={handleInput} />
        <IoMdSearch className=' rounded-md ' size={25} color='black' />


        <div className='absolute w-full top-14 left-0 px-3 py-2 flex flex-col gap-2 bg-[#d8d4d4]'>
{
  searchResults.map(function(searchResult)
  {
    return (
      <div key={searchResult.id} className='w-full '>
      <Link to={"/"} className=' w-fit relative linkItems after:bg-cyan-700' onClick={()=>setLanguage(searchResult.id)}>{searchResult.name}</Link>

      </div>

    )
  })
}
        </div>
      </form>


      {
        loading ? (
          
            <div className='w-full h-screen flex items-center justify-center '>
                    <Loader/>
            </div>
        ):(
          languages.map(function (language) {
            return (
              <div key={language.id} className='w-full flex items-center justify-between pb-5 px-3 mt-14  text-white font-medium border-b-2 border-[#aaadb0]'>
                <h1 className='text-2xl min-[250px]:text-lg md:text-3xl'>{language.name}</h1>
                <Link to={"/"} onClick={()=> handleLanguageChange(language.id)} className="bg-blue-600 px-10 py-2 rounded-md min-[250px]:px-5 md:px-16 md:py-4">Use</Link>
              </div>
            )
          })
          )
        
      }


    </div>
  )
}

export default LanguageSection