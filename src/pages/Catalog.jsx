import React from 'react'
import { useParams } from 'react-router-dom';
import PageHeader from '../Components/page-header/PageHeader';
import {category as cate} from '../api/tmdbApi';

const Catalog = () => {
  const {category}=useParams();

  console.log(category);
  return (
    <>
    <PageHeader>
      {category===cate.movie?'Movie':'TV Shows'}
    </PageHeader>
    </>
  );
}

export default Catalog
