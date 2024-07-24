// IMPORT REACT ICONS
import { MdArrowOutward } from "react-icons/md"

// IMPORT JSX ATOMS
import ButtonArrow from "@/atoms/atoms-shiva/buttons/arrow/jsx"
import HeadingOneWHite from "@/atoms/atoms-shiva/headings/one/six-xl/semibold/white/jsx"
import Link from "@/atoms/links/jsx"

const HeroCard = ( { title, colored_title, button_text, button_link } ) => {

    // FUNCTION TO FORMAT HEADING AND ADD COLORED PARTS
    const formatHeading = ( heading, coloredword ) => {

        let formattedHeading = heading
        coloredword.forEach ( word => {

            const regex = new RegExp(`(${ word })`, 'gi')
            formattedHeading = formattedHeading.replace(regex, '<span class="text-emerald-400">$1</span>')

        })

        return { __html: formattedHeading }

    }

    return (

        <div className="!flex flex-col gap-10">
            <HeadingOneWHite>
                <span dangerouslySetInnerHTML={ formatHeading( title, colored_title ) } />
            </HeadingOneWHite>
            <Link href={ button_link }>
                <ButtonArrow>{ button_text }<MdArrowOutward/></ButtonArrow>
            </Link>
        </div>

    )

}
export default HeroCard
