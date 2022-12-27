import SearchInput from '../../../components/atom/SearchInput';
import TabBar from '../../../components/atom/TabBar';
import ConnectorList from './ConnectorList';

const ConnectorsPanel = () => {

    return (
        <div className='h-full w-[500px] bg-bLight border-r-[2px] border-r-bPurple'>
            <p className='text-bBright text-2xl mb-5 mt-8 mx-8'>Connectors</p>
            <SearchInput className='mb-7 mx-8' placeholder='Search connectors...'/>
            <TabBar tabs={[
                {
                    id: '1',
                    name: 'Core',
                    content:
                    <ConnectorList
                        key={'test'}
                        connectors={
                            [
                                {
                                    id: '1',
                                    name: 'Boolean Condition'
                                },
                                {
                                    id: '2',
                                    name: 'Script'
                                },
                                {
                                    id: '3',
                                    name: 'HTTP Client'
                                }
                            ]
                        }
                    />

                },
                {
                    id: '2',
                    name: 'Triggers',
                    content: <p key='test'>test2</p>

                },
                {
                    id: '3',
                    name: 'Helpers',
                    content: <p key='test'>test3</p>

                },
                {
                    id: '4',
                    name: 'Services',
                    content: <p key='test'>test4</p>

                }
            ]}/>
        </div>
    )
}

export default ConnectorsPanel;