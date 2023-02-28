import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import PropTypes from "prop-types";

function NomineeCard({ nomineeData, selectedNomineeIds, categoryId }) {
  const nomineeCardClass =
    selectedNomineeIds.indexOf(nomineeData.id) !== -1
      ? "selected-nominee-card"
      : "";

  return (
    <div className={`nominee-card ${nomineeCardClass}`}>
      {nomineeData.title}
      <br />
      <br />
      PHOTO:
      {nomineeData.photoUrl}
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
    <div>
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
