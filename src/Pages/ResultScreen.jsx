import React, { useState } from 'react'
import Result from '../Components/Result/Result';

function ResultScreen() {
  const [winners] = useState([
    {
      id: 1,
      contest: 'Logo Design Contest',
      name: 'Sarah Chen',
      prize: '$2,500',
      status: 'completed',
    },
    {
      id: 2,
      contest: 'UI/UX Challenge',
      name: '',
      prize: '$1,500',
      status: 'judging',
    },
    {
      id: 3,
      contest: 'Illustration Contest',
      name: 'Ahmed Ali',
      prize: '$1,000',
      status: 'completed',
    },
  ]);

  return (
    <div>
      <Result winners={winners} />
    </div>
  );
}

export default ResultScreen;
