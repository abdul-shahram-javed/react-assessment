import React from 'react'
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux'
import { saveSelectedNominee, saveSelectedNomineeId } from '../Redux/slice/CategorySlice'

Button.propTypes = {
  categoryId: PropTypes.string.isRequired,
  nomineeData: PropTypes.object.isRequired,
};

export default function Button(props) {

  const {categoryId, nomineeData} = props

  const dispatch = useDispatch()

  function handleClick() {
    dispatch(saveSelectedNominee({ type: categoryId, nomineeId: nomineeData?.id }))
    dispatch(saveSelectedNomineeId({nomineeId: nomineeData?.id, categoryId: categoryId}))
  }

  return (
    <div>
      <button onClick={handleClick}>Select Me</button>
    </div>
  )
}
