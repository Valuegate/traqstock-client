import React from 'react';
import breeds from '../mock_data/flock_breed.json';
import Tippy from '@tippyjs/react';
import { FaEye } from 'react-icons/fa';

function FlockBreed() {

  return <div className='lg:p-4'>
    <h2 className='text-3xl text-center lg:text-left'>Flock Breeds</h2>
  <table className='table-auto w-full border-collapse'>
  <thead className='shadow-lg text-left bg-hover-gold text-base-brown font-bold'>
    <tr className='h-10 text-xs lg:text-sm'>
      <th className='p-2 w-[10%] lg:table-cell'>S/No</th>
      <th className='p-2 w-[35%] lg:table-cell'>Breed Name</th>
      <th className='p-2 w-[25%] lg:table-cell '>Total Registered</th>
      <th className='p-2 w-[25%] lg:table-cell '></th>
    </tr>
  </thead>
  <tbody>
    {
      breeds.map((breed, index) => <tr key={index} className='h-10 border-b-2 font-normal text-sm lg:text-base'>
        <td className='p-2'>{ index }</td>
        <td className='p-2'>{ breed.name }</td>
        <td className='p-2'>{ breed.registered }</td>
        <td className='p-2'>
          <Tippy content='View registered flocks'>
            <button>
              <FaEye />
            </button>
          </Tippy>
        </td>
      </tr>)
    }
  </tbody>
</table>
</div>
}

export default FlockBreed;
