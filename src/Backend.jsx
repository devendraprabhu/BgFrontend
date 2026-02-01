import React from 'react'
import { useState } from 'react'
import RippleGrid from './components/RippleGrid'

const Backend = () => {
    const [file, setfile] = useState(null);
    const [image, setimage] = useState(null);
    const [processimage, setprocessimage] = useState(null);
    const [loading, setLoading] = useState(false);
    const handel_event= async(e)=>{
        e.preventDefault();
        if(!file){
            window.alert("Please Upload a File");
            return;
        }
        setLoading(true);
        const formdata = new FormData();
    formdata.append('image',file);
    try{
        const response = await fetch('http://localhost:3002/upload',{
            method:'POST',
            body: formdata
        })
        const data= await response.json();
        if( data.success && data.filename ){
            setprocessimage(`http://localhost:3002/upload/${encodeURIComponent(data.filename)}`);
        } else {
            window.alert(data.message || "Failed to process image");
        }
    }
    catch(err){
        window.alert(" Error has Occured while uploading the file");
    }
    finally{
        setLoading(false);
    }
    }
    
      const handleDownload =  async ()=>{
        try{
            const response = await fetch(processimage);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'processed_image.png';
            document.body.appendChild(link);
            link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        }
        catch(err){
            window.alert("Error occurred while downloading the image");


        }

      }
    return (
    <div className='relative min-h-screen overflow-hidden'>
        <div className='absolute inset-0 -z-10'>
            <RippleGrid />
        </div>
        <div className='flex justify-center items-center '> 
            <h1 className='text-3xl font-bold text-center mt-10 
            mb-6 '>Upload your Image</h1> <br />
            
            
        </div>
        {
            !processimage ? (
                  <div className='flex items-center justify-center mt-10'>
        
            <form action=""  onSubmit={
                async (e) =>{
                    handel_event(e);
                }
            }
            method="post" className='flex flex-col items-center ' encType='multipart/form-data'>

                <input type="file" className='border-4 border-dashed 
                border-gray-300 p-5 rounded-lg cursor-pointer text-center
                ' onChange={(e)=>{
                    setfile(e.target.files[0])
                }}/>
                <h2 className='font-sans font-bold '>Or</h2>
                <input type="url" name='image'  className='border-2 mt-2.5 p-2.5 rounded-lg text-black placeholder:text-gray-500' placeholder='Enter your url '/>
                <button  type='submit' disabled={loading} className={`mt-2 bg-black text-white p-2.5 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    {loading ? 'Processing...' : 'Submit'}
                </button>
            </form>
        </div>
            ):(
                <div className='flex flex-col items-center'>
                    <img src={processimage} alt="Result" className='max-w-md border rounded-lg mb-4' />
                    <div className='flex gap-4'>
                        <button onClick={() => setprocessimage(null)} className='bg-gray-500 text-white p-2.5 rounded-lg hover:bg-gray-600 transition-all hover:scale-105'>Upload Another</button>
                        <button onClick={handleDownload} className='bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition-all hover:scale-105'>Download PNG</button>
                    </div>
                </div>
            )
        }
      
    </div>
  )
}


export default Backend