import React from "react"

// IMPORT REACT ICONS
import { MdArrowOutward } from "react-icons/md"

const HeroCard = ({title, colored_title, button_text, button_link}) => {
    // FUNCTION TO FORMAT HEADING AND ADD COLORED PARTS
    const formatHeading = (heading, coloredword) => {
        let formattedHeading = heading
        coloredword.forEach(word => {
            const regex = new RegExp(`(${word})`, 'gi')
            formattedHeading = formattedHeading.replace(regex, '<span class="text-emerald-500">$1</span>')
        })
        return { __html: formattedHeading }
    }

    return (
        <div className="!flex flex-col gap-10">
            <h1 className="text-4xl lg:text-6xl font-semibold font-larken text-white">
                <span dangerouslySetInnerHTML={formatHeading(title, colored_title)} />
            </h1>
            <a href={ button_link }>
                <button className="flex items-center gap-2 px-2 py-1 text-white hover:text-black hover:bg-white duration-300 rounded-lg border-2 border-white">{ button_text }<MdArrowOutward/></button>
            </a>
        </div>
    )
}
export default HeroCard
