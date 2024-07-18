import React from "react"

// IMPORT REACT ICONS
import { FaFacebookF, FaYoutube, FaVimeoV, FaLinkedinIn } from "react-icons/fa"

const SocialLinks = () => {
    return (
        <div className="flex gap-6">
            <a href="/">
                <FaFacebookF className="text-white size-6 hover:text-orange-400 duration-300"/>
            </a>
            <a href="/">
                <FaYoutube className="text-white size-6 hover:text-orange-400 duration-300"/>
            </a>
            <a href="/">
                <FaVimeoV className="text-white size-6 hover:text-orange-400 duration-300"/>
            </a>
            <a href="/">
                <FaLinkedinIn className="text-white size-6 hover:text-orange-400 duration-300"/>
            </a>
        </div>
    )
}
export default SocialLinks
