import React from 'react';
import Demo1PropsChild from './Demo1_PropsChild';

export default function Demo1PropsParent() {
  return (
    <div>
        <h3>Parent component</h3>
        <Demo1PropsChild firstName="Sapir" lastName="Shahar"/>
        <h3>Parent footer</h3>
    </div>
  )
}
