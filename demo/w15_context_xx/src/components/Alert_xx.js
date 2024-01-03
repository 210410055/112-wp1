import React, { useEffect } from 'react';
import { useBlogContext } from '../App_xx';

const Alert_xx = () => {
<<<<<<< HEAD
  const { alert, showAlert } = useBlogContext();
=======
  const {alert, showAlert} = useBlogContext();
>>>>>>> 69508b4b160c4f91db72f2abfc89314d4a48f28d
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return <p className={`alert alert-${alert.type}`}> {alert.msg} </p>;
};

export default Alert_xx;
