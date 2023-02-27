import React, { useEffect, useState, useReducer } from 'react';
import Category from '../Category'
import Api from '../../Api/Api'
import { CategoryContext } from '../../Contexts/CategoryContext';
import ErrorBoundary from '../../Error-boundaries/error-boundary';
import ModalDialog from '../ModalDialog';

function categorySelectionReducer(state, action) {
  switch (action.type) {
    default:
      if (state.hasOwnProperty(action.type) && state[action.type] === true) {
        return {...state}
      }
      state[action.type] = true;
      action.functionToCall(action.nomineeId);
      return {...state}
  }
}

const Ballot = () => {

  const [toggleModal, setToggleModal] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [state, dispatch] = useReducer(categorySelectionReducer, {});


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
          {categoriesData.map((row) => { return <CategoryContext.Provider value={dispatch}><Category key={row.id} category={row} /></CategoryContext.Provider>})}
        </div>
        <div className="clear"></div>
        <button className="submit-ballot-button" onClick={toggleModelDialog}>SUBMIT BALLOT BUTTON</button>
        {toggleModal && <ModalDialog toggleModelDialog={toggleModelDialog} />}
      </>
    </ErrorBoundary>
  )
}

export default Ballot;