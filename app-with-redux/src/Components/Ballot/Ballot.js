import React, { useEffect, useState } from 'react';
import Category from '../Category/Category'
import Api from '../../Api/Api'
import ErrorBoundary from '../../Error-boundaries/error-boundary';
import styles from './Ballot.module.css'
import ModalDialog from '../ModalDialog/ModalDialog';
import { Button } from 'react-bootstrap';


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
        <div className={styles.ballot}>
          {categoriesData.map((row) => { return <Category key={row.id} category={row} />})}
        </div>
        <Button className={styles.submitBallotBtn} onClick={toggleModelDialog} type='submit'> Submit Ballot</Button>
        {toggleModal && <ModalDialog toggleModelDialog={toggleModelDialog} />}
      </>
    </ErrorBoundary>
  )
}

export default Ballot;