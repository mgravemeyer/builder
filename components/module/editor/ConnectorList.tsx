import { Connector } from '../../../types/types';
import ConnectorRow from '../../atom/ConnectorRow';
import React from "react";

type ConnectorListProps = {
    connectors: Connector[]
}

const ConnectorList = ({connectors}: ConnectorListProps) => {
    return (
        <div className='px-6 mt-2'>
            {connectors.map(connector => {
                return (
                    <ConnectorRow key={connector.id} connector={connector} />
                )
            })}
        </div>
    )
}

export default ConnectorList;