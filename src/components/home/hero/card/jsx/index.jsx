// IMPORT REACT ICONS
import { MdArrowOutward } from "react-icons/md"

// IMPORT REACT ATOMS
import HeadingOneWHite from "@/atoms/atoms-shiva/headings/one/six-xl/semibold/white/jsx"
import Link from "@/atoms/links/jsx"

const HeroCard = ({title, colored_title, button_text, button_link}) => {
    // FUNCTION TO FORMAT HEADING AND ADD COLORED PARTS
    const formatHeading = (heading, coloredword) => {
        let formattedHeading = heading
        coloredword.forEach ( word => {

            const regex = new RegExp(`(${word})`, 'gi')
            formattedHeading = formattedHeading.replace(regex, '<span class="text-emerald-400">$1</span>')

        })
        return { __html: formattedHeading }
    }

    return (
        <div className="!flex flex-col gap-10">
            <HeadingOneWHite>
                <span dangerouslySetInnerHTML={ formatHeading(title, colored_title) } />
            </HeadingOneWHite>
            <Link href={ button_link }>
                <button className="flex items-center gap-2 px-2 py-1 text-white hover:text-black hover:bg-white duration-300 rounded-lg border-2 border-white">{ button_text }<MdArrowOutward/></button>
            </Link>
        </div>
    )
}
export default HeroCard
