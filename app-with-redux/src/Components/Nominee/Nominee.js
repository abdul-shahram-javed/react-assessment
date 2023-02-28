import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import styles from './Nominee.module.css'

function NomineeCard({ nomineeData, selectedNomineeIds, categoryId }) {
  const nomineeCardClass =
    selectedNomineeIds.indexOf(nomineeData.id) !== -1
      ? styles.selectedNomineeCard
      : "";

  return (
    <div className={`${styles.nomineeCard} ${nomineeCardClass}`}>
      {nomineeData.title}


       <img src={nomineeData.photoUrL} alt='Nominee' className={styles.nomineePicture} />

      <Button
        key={nomineeData.id}
        nomineeData={nomineeData}
        categoryId={categoryId}
      />
    </div>
  );
}

export default function Nominee(props) {
  const { categoryData } = props;

  const selectedNomineeIds = useSelector((state) =>
    Object.values(state.category.selectedNomineeIds)
  );
  const categoryId = categoryData?.id;

  return (
    <div className={styles.nomineeCardContainer}>
      {categoryData?.items?.map((nominee) => (
        <NomineeCard
          key={nominee.id}
          selectedNomineeIds={selectedNomineeIds}
          nomineeData={nominee}
          categoryId={categoryId}
        />
      ))}
    </div>
  );
}

Nominee.propTypes = {
  categoryData: PropTypes.object.isRequired,
};
