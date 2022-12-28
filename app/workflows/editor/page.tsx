'use client';

import EditorHeader from '../../../components/module/editor/EditorHeader';
import ConnectorsPanel from '../../../components/module/editor/ConnectorsPanel';
import GridEditor from '../../../components/module/editor/GridEditor';
import DetailPanel from '../../../components/module/editor/DetailPanel';
import { useState } from 'react';

const Page = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('');

  return (
    <div className='flex h-full w-full flex-col'>
      <EditorHeader />
      <div className='flex h-full w-full justify-between'>
        <ConnectorsPanel />
        <GridEditor setSelectedNodeId={setSelectedNodeId} />
        <DetailPanel selectedNodeId={selectedNodeId} />
      </div>
    </div>
  );
};

export default Page;
