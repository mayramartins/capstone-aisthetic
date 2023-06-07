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

  return (
    <section className="max-w-7x1 mx-auto">

      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w [500px]">Create imaginative and visually captivating images created with AIsthetic and share with the community!</p>
      </div>

    </section>
  )
}

export default NewPost