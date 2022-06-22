import React from 'react';
import Demo1PropsChild from './Demo1_PropsChild';

export default function Demo1PropsParent() {
  return (
    <div className='container mt-5'>
        <h3>Parent component</h3>
        <div className='container mt-4 mb-4'>
          <Demo1PropsChild firstName="Sapir" lastName="Shahar"/>
        </div>
        <h3>Parent footer</h3>
    </div>
  )
}
