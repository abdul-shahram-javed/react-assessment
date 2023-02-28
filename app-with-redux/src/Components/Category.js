import React, { Fragment } from "react";
import Nominee from "./Nominee";

const Category = (props) => {
  const { category } = props;

  return (
    <Fragment>
      <div className="category">{category?.title}</div>
      <Nominee key={category?.id} categoryData={category} />
    </Fragment>
  );
};

export default Category;
