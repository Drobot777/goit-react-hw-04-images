import {useState} from 'react';
import css from './ImageGallery.module.css';
import {ImageGalleryItem} from 'components/imageGalleryItem/ImageGalleryItem';
import {Modal} from 'components/modal/Modal';
import PropTypes from 'prop-types';

export const ImageGallery = ({object}) => {
  const [modalUrlTags, setModalUrlTags] = useState ({
    url: '',
    tags: '',
    isModal: false,
  });

  const onClicImage = evt => {
    evt.preventDefault ();
    return setModalUrlTags ({
      url: evt.target.name,
      tags: evt.target.alt,
      isModal: true,
    });
  };
  const changeIsModal = () => {
    setModalUrlTags ({isModal: false});
  };

  return (
    <div>
      <ul className={css.gallery} onClick={onClicImage}>
        <ImageGalleryItem option={object} />
      </ul>

      {modalUrlTags.isModal
        ? <Modal
            url={modalUrlTags.url}
            alt={modalUrlTags.tags}
            clouseFanction={changeIsModal}
          />
        : null}
    </div>
  );
};
ImageGallery.propTypes = {
  object: PropTypes.array.isRequired,
};
