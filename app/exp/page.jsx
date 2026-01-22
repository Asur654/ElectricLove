"use client"
import React from 'react'
import { useAppContext } from 'contexts/DataContext';

const Exp = () => {
    const {data} = useAppContext();
    
  return (
    <div>
            {data.map((item) => (
                <p key={item.id}>
                    {item.brand} 
                </p> 
                    ))}
    </div>
  )
}

export default Exp;
