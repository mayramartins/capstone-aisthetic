import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utilities';
import { FormEntry, Spinner } from '../components';

// Navigate to the Home Page and Posts
const NewPost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    picture: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = (e) => {

  }

  const handleSurpriseMe = () => {

  }


  return (
    <section className="max-w-7x1 mx-auto">

      <div>
        <h1 className="f ont-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w [500px]">Create imaginative and visually captivating images created with AIsthetic and share with the community!</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>

        <div className="flex flex-col gap-5">
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

        </div>

      </form>

    </section>
  )
}

export default NewPost