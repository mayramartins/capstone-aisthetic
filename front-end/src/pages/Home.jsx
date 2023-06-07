import React, { useState, useEffect } from 'react';

import { Spinner, Card, FormEntry } from '../components';

const Home = () => {
  const [spinning, setSpinning] = useState(false); //change true spinning
  const [allPosts, setAllPosts] = useState(null);

  const [findText, setfindText] = useState('');


  return (
    <section className="max-w-7x1 mx-auto">
      
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Community Creations </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w [500px]">Explore a compilation of imaginative and visually captivating images created by AIsthetic</p>
      </div>

      <div className="mt-16">
        <FormEntry />
      </div>

      <div className="mt-10">
        {spinning ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <>
            {findText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Displaying findings for <span className="text-[#222328]">{findText}</span>
              </h2>
            )}
          </>

        )}

      </div>

    </section>
  )
}

export default Home