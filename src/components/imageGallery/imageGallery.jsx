import React, { useState, useCallback } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";



const ImageGallery = (props) => {

  console.log(props.imageCollage)
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {props.imageCollage.map((image, i) => (
            <img
              key={image.id}
              src={image.picture_url}
              style={{ width: "100%", display: "block" }}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ImageGallery;
