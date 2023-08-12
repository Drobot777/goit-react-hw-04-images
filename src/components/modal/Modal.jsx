import css from './Modal.module.css';
import PropTypes from 'prop-types';
export const Modal = ({url, alt, clouseFanction}) => {
  const clouseModal = (e) => {
    if(e.target.nodeName==='IMG'){
      return
    }
    return clouseFanction ();
  };

  return (
    <div className={css.overlay} onClick={clouseModal}>
      <div className={css.modal}>
        <img src={url} alt={alt} />
      </div>
    </div>
  );
};
Modal.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  clouseFanction: PropTypes.func.isRequired,
};
