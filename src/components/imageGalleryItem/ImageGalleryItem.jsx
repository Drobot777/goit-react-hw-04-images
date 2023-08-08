import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({option}) => {
  const renderImage = arry => {
    if (!arry || arry === 0) {
      return;
    }
    return arry.map (({previewURL, tags, largeImageURL}, index) => {
      return (
        <li className={css.imageGalleryItem} key={index}>

          <img
            src={previewURL}
            alt={tags}
            className={css.imageGalleryItem_image}
            name={largeImageURL}
          />

        </li>
      );
    });
  };

  return renderImage (option);
};
ImageGalleryItem.propTypes = {
  option: PropTypes.array.isRequired,
};
