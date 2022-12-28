'use client';

import EditorHeader from '../../../components/module/editor/EditorHeader';
import ConnectorsPanel from '../../../components/module/editor/ConnectorsPanel';
import GridEditor from '../../../components/module/editor/GridEditor';
import DetailPanel from '../../../components/module/editor/DetailPanel';
import { useState } from 'react';

const Page = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('');

  return (
    <div className='flex flex-col w-full h-full'>
      <EditorHeader />
      <div className='w-full h-full flex justify-between'>
        <ConnectorsPanel />
        <GridEditor setSelectedNodeId={setSelectedNodeId} />
        <DetailPanel selectedNodeId={selectedNodeId} />
      </div>
    </div>
  );
};

export default Page;
