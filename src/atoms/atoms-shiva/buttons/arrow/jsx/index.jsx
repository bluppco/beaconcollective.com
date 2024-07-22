const ButtonArrow = ( props ) => {

    return (

        <button className="flex items-center gap-2 px-2 py-1 text-white hover:text-black hover:bg-white duration-300 rounded-lg border-2 border-white">
            { props.children }
        </button>

    )

}
export default ButtonArrow
