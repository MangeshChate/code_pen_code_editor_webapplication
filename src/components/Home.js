import React, { useState } from 'react'

export default function Home() {

  const [html ,sethtml] = useState('')
  const [css ,setcss] = useState('')
  const [js ,setjs] = useState('')


      const output = document.getElementById('output');
      output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
      output.contentWindow.eval(js);

 
  return (
    <div className='container-fluid mt-4 ' >
    <div className='justify-content-end d-flex'>
    


    </div>
    
      <div className="row d-flex justify-content-center flex-wrap">
        <div className="col-lg-4 col-md-12 col-sm-12 mt-3">
          <div className=" bg-light text-info-emphasis rounded-4 shadow" style={{ height: "30rem", border: "2px solid grey" }}>
            <div className="container-fluid bg-dark text-light rounded-top-3 p-2 ">

              <span className='fw-bold font-monospace'>HTML</span>


            </div>
            <div className='container-fluid'>
              <textarea rows="17" className='form-text form-control bg-light container-fluid border-0 rounded-0 outline-none w-100 ' onChange={(e)=>{sethtml(e.target.value)}} ></textarea>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mt-3">
          <div className=" bg-light text-info-emphasis rounded-4 shadow" style={{ height: "30rem", border: "2px solid grey" }}>
            <div className="container-fluid bg-dark text-light rounded-top-3 p-2 ">

              <span className='fw-bold font-monospace'>CSS</span>


            </div>
            <div className='container-fluid'>
              <textarea rows="17" className='form-text form-control bg-light container-fluid border-0 rounded-0 outline-none w-100' onChange={(e)=>{setcss(e.target.value)}}></textarea>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mt-3">
          <div className=" bg-light text-info-emphasis rounded-4 shadow" style={{ height: "30rem", border: "2px solid grey" }}>
            <div className="container-fluid bg-dark text-light rounded-top-3 p-2 ">

              <span className='fw-bold font-monospace'>JAVASCRIPT</span>


            </div>
            <div className='container-fluid'>
              <textarea rows="17" className='form-text form-control bg-light container-fluid border-0 rounded-0 outline-none w-100' onChange={(e)=>{setjs(e.target.value)}}></textarea>

            </div>
          </div>
        </div>

      </div>


     
        <div className="col-lg-12 col-md-12  col-sm-12 bg-light text-info-emphasis rounded-4 mt-4 mb-5 shadow" style={{ height: "30rem", border: "2px solid grey" }}>
          <div className="container-fluid bg-dark text-light rounded-top-3 p-2 ">

            <span className='fw-bold font-monospace'>OUTPUT</span>


          </div>
          <div className="container-fluid">
          <iframe id="output"></iframe>

          </div>
        </div>

    

    </div>
  )
}
