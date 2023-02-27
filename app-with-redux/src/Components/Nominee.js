import React from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'
import PropTypes from "prop-types";


Nominee.propTypes = {
  categoryData: PropTypes.object.isRequired,
};

export default function Nominee(props) {

  const selectedNomineeIds = useSelector(state => Object.values(state.category.selectedNomineeIds))
  const categoryId = props.categoryData.id;

  function NomineeCard({nomineeData}){

      return <div className={"nominee-card " + (selectedNomineeIds.indexOf(nomineeData.id) !== -1 ? 'selected-nominee-card' : '')}>
          {nomineeData.title}
          <br /><br />
          PHOTO:
          {nomineeData.photoUrl}
          <Button key={nomineeData.id} nomineeData={nomineeData} categoryId={categoryId} />
      </div>
  }

  return (
    <div>
        {props.categoryData.items.map((nominee) => <NomineeCard key={nominee.id} nomineeData={nominee} categoryId={categoryId} />)}
    </div>
  )
}
