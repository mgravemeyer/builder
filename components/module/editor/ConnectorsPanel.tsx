import SearchInput from '../../../components/atom/SearchInput';
import TabBar from '../../../components/atom/TabBar';
import ConnectorList from './ConnectorList';
import nodeTypes from '../../../data/nodeTypes';

const ConnectorsPanel = () => {
  return (
    <div className='h-full w-[500px] bg-bLight border-r-[2px] border-r-bPurple'>
      <p className='text-bBright text-2xl mb-5 mt-8 mx-8'>Connectors</p>
      <SearchInput className='mb-7 mx-8' placeholder='Search connectors...' />
      <TabBar
        tabs={[
          {
            id: '1',
            name: 'Triggers',
            content: (
              <ConnectorList
                key={'triggers'}
                connectors={nodeTypes.filter((element) => element.category === 'triggers')}
              />
            ),
          },
          {
            id: '2',
            name: 'Core',
            content: (
              <ConnectorList
                key={'core'}
                connectors={nodeTypes.filter((element) => element.category === 'core')}
              />
            ),
          },
          {
            id: '3',
            name: 'Helpers',
            content: (
              <ConnectorList
                key={'triggers'}
                connectors={nodeTypes.filter((element) => element.category === 'helpers')}
              />
            ),
          },
          {
            id: '4',
            name: 'Services',
            content: (
              <ConnectorList
                key={'triggers'}
                connectors={nodeTypes.filter((element) => element.category === 'services')}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default ConnectorsPanel;
