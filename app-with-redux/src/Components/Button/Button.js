import React from 'react'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux'
import { saveSelectedNominee, saveSelectedNomineeId } from '../../Redux/slice/CategorySlice'
import styles from './Button.module.css'

import { Button as ButtonStrap } from 'react-bootstrap';


export default function Button(props) {

  const {categoryId, nomineeData} = props

  const dispatch = useDispatch()

  function handleClick() {
    dispatch(saveSelectedNominee({ type: categoryId, nomineeId: nomineeData?.id }))
    dispatch(saveSelectedNomineeId({nomineeId: nomineeData?.id, categoryId: categoryId}))
  }

  return (
    <>
      <ButtonStrap variant="primary" onClick={handleClick} className={styles.primaryBtn}>Select Me</ButtonStrap>
    </>
  )
}


Button.propTypes = {
  categoryId: PropTypes.string.isRequired,
  nomineeData: PropTypes.object.isRequired,
};