import SearchInput from '../../../components/atom/SearchInput';
import TabBar from '../../../components/atom/TabBar';
import ConnectorList from './ConnectorList';
import nodeTypes from '../../../data/nodeTypes';

const ConnectorsPanel = () => {
  return (
    <div className='h-full min-w-[350px] border-r-[1.5px] border-r-bPurple bg-bLight'>
      <p className='mx-8 mb-5 mt-8 text-2xl text-[black]'>Connectors</p>
      <SearchInput className='mx-8 mb-7' placeholder='Search connectors...' />
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
