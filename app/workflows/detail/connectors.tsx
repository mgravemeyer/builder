import SearchInput from '../../../components/atom/SearchInput';
import TabBar from '../../../components/atom/TabBar';
import { randomUUID } from 'crypto';
import ConnectorList from '../../../components/module/ConnectorList';

const Connectors = () => {

    return (
        <div className='h-full w-[600px] bg-bLight border-r-[2px] border-r-bPurple'>
            <p className='text-bBright text-2xl mb-5 mt-8 mx-8'>Connectors</p>
            <SearchInput className='mb-7 mx-8' placeholder='Search connectors...'/>
            <TabBar tabs={[
                {
                    id: randomUUID(),
                    name: 'Core',
                    content: <ConnectorList
                        key={'test'}
                        connectors={
                            [
                                {
                                    id: randomUUID(),
                                    name: 'Boolean Condition'
                                },
                                {
                                    id: randomUUID(),
                                    name: 'Script'
                                },
                                {
                                    id: randomUUID(),
                                    name: 'HTTP Client'
                                }
                            ]
                        }
                    />

                },
                {
                    id: randomUUID(),
                    name: 'Triggers',
                    content: <p key='test'>test2</p>

                },
                {
                    id: randomUUID(),
                    name: 'Helpers',
                    content: <p key='test'>test3</p>

                },
                {
                    id: randomUUID(),
                    name: 'Services',
                    content: <p key='test'>test4</p>

                }
            ]}/>
        </div>
    )
}

export default Connectors;