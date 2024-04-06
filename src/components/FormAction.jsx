 const FormAction = ({
    handleSubmit,
    type='Button',
    action='submit',
    text
})=>{
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className=" relative w-full flex justify-center my-4  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 outline-none focus:ring-offset-2"
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            :
            <></>
        }
        </>
    )
}

export default FormAction;