'use client';
import { useState } from 'react';

type Tab = {
    id: string,
    name: string,
    content: JSX.Element[]
}

type TabBarProps = {
    tabs: Tab[]
}

const TabBar = ({ tabs } : TabBarProps) => {

    const [selected, setSelected] = useState<string>(tabs[0].id);

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                {tabs.map(tab => {
                    return (
                        <div className='flex flex-row justify-evenly w-full' key={tab.id}>
                            <div className='flex flex-col text-center cursor-pointer' onClick={() => setSelected(tab.id)}>
                                <p className={tab.id === selected ? 'text-bBright' : 'text-bLightPurple'}>
                                    {tab.name}
                                </p>
                                { tab.id === selected ?
                                    <div className='bg-bBright w-16 h-[1px] w-full mt-4'></div> : null
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='w-full h-[1px] bg-bBright h-[0.5px]'></div>
        </div>
    )
}

export default TabBar;