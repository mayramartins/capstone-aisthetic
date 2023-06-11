import React, { useState, useEffect } from 'react';

import { Spinner, Card, FormEntry } from '../components';

const RenderCards = ({ data, title }) => {
  // if data is >0 I want to map over to data render all cards while passing all of the post data to each card
  if(data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }
  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [spinning, setSpinning] = useState(false); //change true spinning
  const [allPosts, setAllPosts] = useState(null);

  const [findText, setfindText] = useState('');

  // Make a call to get all the posts
  useEffect(() => {
    const fetchPosts = async () => {
      setSpinning(true);
      

      try {
        const response = await fetch('http://aisthetic.herokuapp.com/api/v1/post', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if(response.ok) {
          const result = await response.json();

          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error)
      } finally {
        setSpinning(false)
      }

    }
    fetchPosts();
  }, []);


  return (
    <section className="max-w-7x1 mx-auto">
      
      <div>
        <h1 className="font-extrabold text-[#7D40FF] text-[32px]">Find Creations </h1>
        <p className="mt-2 font-bold text-[#717983] text-[14px] max-w [500px]">Explore a compilation of imaginative and visually captivating images created by AIsthetic</p>
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
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {findText ? (
                <RenderCards
                  data={[]} 
                  title="No search results found"
                />
              ) : (
                <RenderCards 
                  data={allPosts}
                  title="No posts found"
                />
              )}
            </div>
          </>
        )}

      </div>

    </section>
  )
}

export default Home
