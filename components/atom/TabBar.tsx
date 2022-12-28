'use client';
import { useState } from 'react';

type Tab = {
  id: string;
  name: string;
  content: JSX.Element;
};

type TabBarProps = {
  tabs: Tab[];
};

const TabBar = ({ tabs }: TabBarProps) => {
  const [selected, setSelected] = useState<string>(tabs[0].id);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row px-1'>
        {tabs.map((tab) => {
          return (
            <div className='flex w-full flex-row justify-evenly' key={tab.id}>
              <div
                className='flex cursor-pointer flex-col text-center'
                onClick={() => setSelected(tab.id)}
              >
                <p className={tab.id === selected ? 'text-[black]' : 'text-bLightPurple'}>
                  {tab.name}
                </p>
                {tab.id === selected ? (
                  <div className='mt-4 h-[2px] w-16 w-full bg-[black]'></div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      <div className='h-1 h-[1px] w-full bg-bPurple'></div>
      {tabs
        .filter((tab) => tab.id === selected)
        .map((tab) => {
          return tab.content;
        })}
    </div>
  );
};

export default TabBar;
