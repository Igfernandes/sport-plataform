import React, { useState } from 'react';
import Lightbox from 'react-spring-lightbox';
import { images } from './data/imagesList';

const CoolLightBox = () => {
    const [currentImageIndex, setCurrentIndex] = useState(0);

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);

    return (
        <Lightbox
            isOpen={true}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
        /* Add your own UI */
        // renderHeader={() => (<CustomHeader />)}
        // renderFooter={() => (<CustomFooter />)}
        // renderPrevButton={() => (<CustomLeftArrowButton />)}
        // renderNextButton={() => (<CustomRightArrowButton />)}
        // renderImageOverlay={() => (<ImageOverlayComponent >)}

        /* Add styling */
        // className="cool-class"
        // style={{ background: "grey" }}

        /* Handle closing */
        // onClose={handleClose}

        /* Use single or double click to zoom */
        // singleClickToZoom

        /* react-spring config for open/close animation */
        // pageTransitionConfig={{
        //   from: { transform: "scale(0.75)", opacity: 0 },
        //   enter: { transform: "scale(1)", opacity: 1 },
        //   leave: { transform: "scale(0.75)", opacity: 0 },
        //   config: { mass: 1, tension: 320, friction: 32 }
        // }}
        />
    );
};

export default CoolLightBox;