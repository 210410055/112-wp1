import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
const url = 'https://api.github.com/users/QuincyLarsonic';

const T31_xx_MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        console.log('resp', resp);
        if(!resp.ok){
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await resp.json();
        console.log('user data', data);
        setIsLoading(false);
        setIsError(false);
        setUser(data);
        
      }catch(error){
        console.log(error);
      }

    }
    fetchUser();
  }, []);

  if(isLoading) {
    return <h2>Loading ...</h2>
  }

  if(isError) {
    return <h2>There was an error ...</h2>
  }

  const {name} = user;
  return (
    <>
      <h2>{name}</h2>
    </>
  );
};

export default T31_xx_MultipleReturns;
=======
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
>>>>>>> 69508b4b160c4f91db72f2abfc89314d4a48f28d
