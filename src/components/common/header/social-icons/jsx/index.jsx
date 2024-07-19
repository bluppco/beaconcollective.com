// IMPORT REACT ICONS
import { FaFacebookF, FaYoutube, FaVimeoV, FaLinkedinIn } from "react-icons/fa"

// IMPORT REACT ATOMS
import LinkNewWindow from "@/atoms/links/new-window/jsx"

// HARDCODED DATA
const links = [
    {
        aria_label: "Facbook",
        icon: FaFacebookF,
        link: "/facebook",
    },
    {
        aria_label: "Youtube",
        icon: FaYoutube,
        link: "/youtube",
    },
    {
        aria_label: "Vimeo",
        icon: FaVimeoV,
        link: "/vimeo",
    },
    {
        aria_label: "Linkedin",
        icon: FaLinkedinIn,
        link: "/linkedin",
    },
]

const SocialLinks = () => {
    return (
        <div className="flex gap-6">
            {
            
                links.map( ( social ) => (

                    <LinkNewWindow aria_label={ social.aria_label } href={ social.link }>
                        <social.icon className="text-white size-6 hover:text-orange-400 duration-300"/>
                    </LinkNewWindow>

                ))
            
            }
        </div>
    )
}
export default SocialLinks
