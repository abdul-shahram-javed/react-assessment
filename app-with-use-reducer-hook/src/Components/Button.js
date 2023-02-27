import React, { useContext } from 'react'
import PropTypes from "prop-types";
import { CategoryContext } from '../Contexts/CategoryContext'

Button.propTypes = {
  categoryId: PropTypes.string.isRequired,
  nomineeData: PropTypes.object.isRequired,
  setNomineeCard: PropTypes.func.isRequired
};

export default function Button(props) {

  const dispatch = useContext(CategoryContext)

  function handleClick() {
    dispatch({ type: props.categoryId, functionToCall: props.setNomineeCard, nomineeId: props.nomineeData.id });  
  }

  return (
    <div>
      <button onClick={handleClick}>Select Me</button>
    </div>
  )
}
