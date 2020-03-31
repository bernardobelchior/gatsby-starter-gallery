import React from "react"
import Img from "gatsby-image"
import useGallery from "../hooks/useGallery"
import "./gallery.css"

const Gallery = () => {
    const images = useGallery()

    return (
        <div className="gallery">
            {images.map(({ id, fluid }) => (
                <Img key={id} fluid={fluid} />
            ))}
        </div>
    )
}

export default Gallery