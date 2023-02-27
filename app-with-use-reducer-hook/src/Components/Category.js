import React, { Fragment } from 'react';
import Nominee from './Nominee';

const Category = (props) => {
    return (
        <Fragment>
            <div className='category'>
                {props.category.title}
            </div>
            <Nominee key={props.category.id} categoryData={props.category} />
        </Fragment>

      )
}

export default Category;