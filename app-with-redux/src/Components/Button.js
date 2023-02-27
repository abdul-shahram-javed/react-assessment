import React from 'react'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux'
import { saveSelectedNominee, saveSelectedNomineeId } from '../Redux/CategorySlice'

Button.propTypes = {
  categoryId: PropTypes.string.isRequired,
  nomineeData: PropTypes.object.isRequired,
};

export default function Button(props) {

  const reduxDispatch = useDispatch()

  function handleClick() {
    reduxDispatch(saveSelectedNominee({ type: props.categoryId, nomineeId: props.nomineeData.id }))
    reduxDispatch(saveSelectedNomineeId({nomineeId: props.nomineeData.id, categoryId: props.categoryId}))
  }

  return (
    <div>
      <button onClick={handleClick}>Select Me</button>
    </div>
  )
}
