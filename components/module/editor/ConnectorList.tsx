import { NodeType } from '../../../types/types';
import ConnectorRow from '../../atom/ConnectorRow';
import React from 'react';

type ConnectorListProps = {
  connectors: NodeType[];
};

const ConnectorList = ({ connectors }: ConnectorListProps) => {
  return (
    <div className='px-6 mt-2'>
      {connectors.map((connector) => {
        return <ConnectorRow key={connector.id} connector={connector} />;
      })}
    </div>
  );
};

export default ConnectorList;
