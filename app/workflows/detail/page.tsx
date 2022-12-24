import Connectors from './connectors';
import Detail from './detail';
import Grid from './grid';

const Page = () => {
    return (
        <div className='w-full h-full bg-bDark flex justify-between'>
            <Connectors/>
            <Grid/>
            <Detail/>
        </div>
    )
}

export default Page;