import React, { useEffect, useState } from 'react';
import Category from '../Category'
import Api from '../../Api/Api'
import ErrorBoundary from '../../Error-boundaries/error-boundary';
import ModalDialog from '../ModalDialog';

const Ballot = () => {

  const [toggleModal, setToggleModal] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    Api.getBallotData()
    .then((data) => {
      setCategoriesData(data.items);
    })
    .catch((error) => {
      console.error("Error:", error);
      throw new Error('Backend server is not responding!')
    });
  },[]);

  function toggleModelDialog() {
    setToggleModal(!toggleModal)
  }

  return (
    <ErrorBoundary>
      <>
        <div className='ballot'>
          {categoriesData.map((row) => { return <Category key={row.id} category={row} />})}
        </div>
        <div className="clear"></div>
        <button className="submit-ballot-button" onClick={toggleModelDialog}>SUBMIT BALLOT BUTTON</button>
        {toggleModal && <ModalDialog toggleModelDialog={toggleModelDialog} />}
      </>
    </ErrorBoundary>
  )
}

export default Ballot;