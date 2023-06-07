import React, { useState, useEffect } from 'react';

import { Spinner, Card, FormEntry } from '../components';

const Home = () => {
  const [spinning, setSpinning] = useState(false);
  const [allPosts, setAllPosts] = useState(null);


  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Community Creations </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w [500px]">Explore a compilation of imaginative and visually captivating images created by AIsthetic</p>
      </div>

    </section>
  )
}

export default Home