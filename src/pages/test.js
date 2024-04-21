import React from 'react';
import './index.scss';
import Card from "../components/card";

export function TestPage() {
  return (
    <>
      <div className='test-page'>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
