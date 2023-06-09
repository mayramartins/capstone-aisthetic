import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utilities';
import { FormEntry, Spinner } from '../components';

const NewPost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    picture: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('https://aisthetic.herokuapp.com/api/v1/aisthetic', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        
        setForm({...form, picture: `data:image/jpeg;base64,${data.picture}`}) 
        
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please enter a prompt')
    }
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if(form.prompt && form.picture) {
      setLoading(true);
      try {
        const response = await fetch('https://aisthetic.herokuapp.com/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form) 
        })
        
        await response.json();
        navigate('/');
      } catch (err) {
        alert(err)
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a prompt and generate an image')
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt })
  }


  return (
    <section className="max-w-7x1 mx-auto">

      <div>
        <h1 className="font-bold text-[#7D40FF] text-[32px]">Create</h1>
        <p className="mt-2 font-bold text-[#717983] text-[14px] max-w [500px]">Create imaginative and visually captivating images created with AIsthetic and share with the community!</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>

        <div className="flex text-[#09bfbe] flex-col gap-5">
          <FormEntry
            LabelName="Your name" 
            type ="text"
            name = "name"
            placeholder="Felipe Kovs"
            value={form.name}
            handleChange={handleChange}
          />
          <FormEntry
            LabelName="Prompt" 
            type ="text"
            name = "prompt"
            placeholder=  "a pencil and watercolor drawing of a bright city in the future with flying cars"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.picture ? (
              <img
                src={form.picture}
                alt={form.prompt}
                className="w-full h-full objects-contain"
              />
            ): (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12"
              />
            )}

            {generatingImg && (
              <div className="absolute insert-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Spinner />
              </div>
      
            )}

          </div>

        </div>

        <div className="mt-5 flex gap-5">
          
          <button
          type="button"
          onClick={generateImage}
          className="text-white bg-[#00DDDA] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>

        </div>

        <div className="mt-10">
          <p className="mt-2 font-bold text-[#717983] text-[14px]">After crafting your desired image, feel free to share it with fellow community members.</p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#00BFBD] font-medium rounded-md texted-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>

      </form>

    </section>
  )
}

export default NewPost