'use client';
import { useState } from 'react';

type SearchInputProps = {
  className?: string;
  placeholder: string;
};

const SearchInput = ({ className, placeholder }: SearchInputProps) => {
  className = className ? className : '';

  const [keyword, setKeyword] = useState('');

  return (
    <div className={'relative ' + className}>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <svg
          aria-hidden='true'
          className='w-5 h-5'
          fill='none'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke='#A3A2B2'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          ></path>
        </svg>
      </div>
      <input
        type='search'
        id='search'
        className='w-full p-4 pl-10 text-sm border-bPurple border-[1px] rounded-full bg-[white] text-[black] caret-[black]'
        placeholder={placeholder}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
