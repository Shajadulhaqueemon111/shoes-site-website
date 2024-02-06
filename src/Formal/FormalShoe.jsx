import React, { useEffect, useState } from 'react';
import '../StyleCss/style.css';
import FormalCard from './FormalCard';

const FormalShoe = () => {
  const itemsPerPage = 4; // Number of items to display per page
  const [formals, setFormals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('http://localhost:5000/formal')
      .then(res => res.json())
      .then(data => setFormals(data));
  }, []);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFormals = formals.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className='font-familly text-2xl font-bold mb-4 mt-6'>Formal :</h2>
      <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4'>
        {currentFormals.map(formal => (
          <FormalCard key={formal._id} formal={formal}></FormalCard>
        ))}
      </div>
      <div className='pagination text-center gap-4 mb-4'>
        {Array.from({ length: Math.ceil(formals.length / itemsPerPage) }).map((_, index) => (
          <button className='btn btn-outline btn-secondary' key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormalShoe;
