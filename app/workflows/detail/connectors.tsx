import SearchInput from '../../../components/atom/SearchInput';
import TabBar from '../../../components/atom/TabBar';
import { randomUUID } from 'crypto';

const Connectors = () => {

    return (
        <div className='h-full w-[600px] bg-bLight border-r-2 border-r-bPurple p-8'>
            <p className='text-bBright text-3xl mb-2'>Connectors</p>
            <SearchInput placeholder='Search connectors...'/>
            <TabBar tabs={[
                {
                    id: randomUUID(),
                    name: 'Core',
                    content: [
                        <p key='test'>test</p>
                    ]
                },
                {
                    id: randomUUID(),
                    name: 'Triggers',
                    content: [
                        <p key='test'>test</p>
                    ]
                },
                {
                    id: randomUUID(),
                    name: 'Helpers',
                    content: [
                        <p key='test'>test</p>
                    ]
                },
                {
                    id: randomUUID(),
                    name: 'Services',
                    content: [
                        <p key='test'>test</p>
                    ]
                }
            ]}/>
        </div>
    )
}

export default Connectors;