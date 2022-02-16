import React from 'react';

const CatList = ({catPics}) => {
    const images = catPics.map(cat => <img key={cat.id} src={cat.url} alt="cat" />)
    return (
        <div>
            {images}
        </div>
    )
}

export default CatList;