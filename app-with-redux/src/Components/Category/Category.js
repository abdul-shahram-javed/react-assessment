import React from "react";
import Nominee from "../Nominee/Nominee";
import styles from './Category.module.css'

const Category = (props) => {
  const { category } = props;

  return (
    <>
      <div>
        <h3 className={styles.categoryHeader}>
          {category?.title}
        </h3>
        </div>
      <Nominee key={category?.id} categoryData={category} />
    </>
  );
};

export default Category;
