const LinkNewWindow = ({ aria_label, href, children }) => {

    return (

        <a href={ href } aria-label={ aria_label } target="_blank" rel="noopener noreferrer">
            { children }
        </a>

    )

}
export default LinkNewWindow
