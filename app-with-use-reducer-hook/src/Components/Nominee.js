import React, { useState } from 'react'
import Button from './Button'
import PropTypes from "prop-types";


Nominee.propTypes = {
  categoryData: PropTypes.object.isRequired,
};

export default function Nominee(props) {

  const categoryId = props.categoryData.id;
  const [nomineeCard, setNomineeCard] = useState()

  function NomineeCard({nomineeData}){

      return <div className={"nominee-card " + (nomineeCard ==  nomineeData.id ? 'selected-nominee-card' : '')}>
          {nomineeData.title}
          <br /><br />
          PHOTO:
          {nomineeData.photoUrl}
          <Button key={nomineeData.id} nomineeData={nomineeData} categoryId={categoryId} setNomineeCard={setNomineeCard} />
      </div>
  }

  return (
    <div>
        {props.categoryData.items.map((nominee) => <NomineeCard key={nominee.id} nomineeData={nominee} categoryId={categoryId} />)}
    </div>
  )
}
