type ConnectorRowProps = {
    name: string
}
const ConnectorRow = ({ name } : ConnectorRowProps) => {

    return (
        <div className='w-full h-16 bg-bLight text-bBright border-bPurple border-[2px] rounded-xl flex justify-center items-center mt-4 cursor-grab'>
            <p>{name}</p>
        </div>
    )
}

export default ConnectorRow;