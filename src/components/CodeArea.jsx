import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { FaPlay } from "react-icons/fa";
import { FaCircleNotch } from "react-icons/fa";

import { Controlled as CodeEditor } from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript';


import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import Output from './Output';
import Loader from './Loader';
import Logo from '../assests/images/Logo.png';

import { dataContext } from './Context';
import { dataSnippets } from '../dataSnippets';

function CodeArea() {

  let {language}  = useContext(dataContext)
  

  let [inputValue, setInputValue] = useState(dataSnippets[language]);
  let [showOutput, setShowOutput] = useState(false);
  let [outputResult, setOutputResult] = useState("")
  let [showEditor, setShowEditor] = useState(true);
  let [loading, setLoading] = useState(true);


const options = {
  method: 'POST',
  url: 'https://online-code-compiler.p.rapidapi.com/v1/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'fb6500d97cmsh50290af7129a70dp1aaa31jsned59059e72c1',
    'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
  },
  data: {
    language: `${language}`,
    version: 'latest',
    code: `${inputValue}`,
    input: null
  }
};









  async function fetchApi() {
    try {
      const response = await axios.request(options);
      setOutputResult(response.data.output);

    } catch (error) {
      console.error(error.message); // Log the error message
      console.error(error.response.data); // Log the response data (if available)
    }
    finally {
      setLoading(false);

    }
  }

  useEffect(() => {
    fetchApi();


  }, [showOutput]);


  function handleChange(editor, data, inputValue) {
    setInputValue(inputValue)
  }

  
  return (
    <div className=' w-full flex flex-col  mt-5 rounded-md p-3 md:items-center md:mt-14  '>

      <div className='shadow-[0px_0px_13px_1px_#1a202c] md:w-[85%]'>
        <div className='headerOfEditor cursor-pointer w-full h-20  px-3 flex items-center justify-between bg-[#2D2F34] '>

          <img src={Logo} className='w-12 object-cover object-center ' alt="" />

          <div className='flex items-center  outline-none border-2 border-[#3D3F43]'>
            <h1 className={` ${showEditor && "bg-blue-600"} px-4 py-2   `} onClick={() => { setShowEditor(true); setShowOutput(false) }}>main.c</h1>
            <h1 className={` ${showOutput && "bg-blue-600"} px-4 py-2   `} onClick={() => { setShowOutput(true); setShowEditor(false); setLoading(true) }}>Output</h1>
          </div>



          {loading ? (<FaCircleNotch className='loader ' />) : (<FaPlay  cursor={"pointer"} onClick={() => { setShowOutput(true); setShowEditor(false); setLoading(true) }} />)}




        </div>

        {
          showEditor && (
            <CodeEditor className='controlled-editor' value={inputValue} options={{
              theme: "material",
              lineNumbers: true,
              mode: "javascript"
            }} onBeforeChange={handleChange} />
          )
        }

        {
          showOutput && (
            <Output outputResult={outputResult} loading={loading} />
          )
        }
      </div>






    </div>
  )
}

export default CodeArea