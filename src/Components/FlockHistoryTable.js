import React, { useState, useEffect } from 'react';
import { getFlockHistory, convertDate,  } from '../Utils/Funcs';
import Loader from './Loader';

function FlockHistoryTable() {
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    getFlockHistory()
      .then((res) => {
        res.json()
          .then((data) => {
            console.log(data);
            setCollection(data);
            setLoading(false);
          })
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <div>
      <table className='table-auto w-full border-collapse'>
      <thead className='shadow-lg text-left bg-hover-gold text-base-brown font-bold'>
    <tr className='h-10 text-xs lg:text-sm'>
      <th className='p-2 w-[10%] lg:table-cell'>S/No</th>
      <th className='p-2 w-[15%] lg:table-cell'>Flock Name</th>
      <th className='p-2 w-[15%] lg:table-cell '>Rearing Method</th>
      <th className='p-2 w-[15%] lg:table-cell '>Housing</th>
      <th className='p-2 w-[15%] lg:table-cell '>Date</th>
    </tr>
  </thead>
      <tbody>
        <tr>
          <td colSpan="3" className='hidden lg:table-cell'>
            <Loader className='' />
          </td>
          <td colSpan="3" className='hidden lg:table-cell'>
            <Loader className='' />
          </td>
          <td className='table-cell lg:hidden' colSpan="4">
            <Loader className='' />
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  }

  return <div className=''>
  <table className='table-auto w-full border-collapse'>
  <thead className='shadow-lg text-left bg-hover-gold text-base-brown font-bold'>
    <tr className='h-10 text-xs lg:text-sm'>
      <th className='p-2 w-[10%] table-cell'>S/No</th>
      <th className='p-2 w-[15%] table-cell'>Flock Name</th>
      <th className='p-2 w-[15%] table-cell '>Rearing Method</th>
      <th className='p-2 w-[15%] table-cell '>Housing</th>
      <th className='p-2 w-[15%] table-cell '>Date</th>
    </tr>
  </thead>
  <tbody className='text-sm'>
    {
      collection.map((data, index) => <tr key={data.id}  className='h-10 border-b-2 font-normal text-sm lg:text-base'>
      <td className='p-2'>{ index + 1 }</td>
      <td className='p-2'>{ data.flock_name }</td>
      <td className='p-2'>{ data.rearing_method }</td>
      <td className='p-2'>{ data.housing_structure_name }</td>
      <td className='p-2'>{ convertDate(data.date_changed) }</td>
    </tr>)
    }
  </tbody>
</table>
</div>
}

export default FlockHistoryTable;