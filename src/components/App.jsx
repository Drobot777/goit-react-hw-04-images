import {useEffect, useState} from 'react';
import {Searchbar} from './searchbar/Searchbar';
import {Button} from './button/Button';
import {ImageGallery} from './imageGallery/ImageGallery';
import {findImages} from '../appi';
import {Loader} from './loader/Loader';

export const App = () => {
  const [isLoading, setIsLoading] = useState (false);
  const [date, setDate] = useState ([]);
  const [pag, setPag] = useState ('');
  const [valueSab, setValuSab] = useState ('');
  const [isError, setIsError] = useState ({isEr: false, messageEr: ''});

  const changeValueSab = evt => {
    if (evt === '') {
      return;
    }

    setValuSab (evt);
    setPag (1);
    setDate([]);
  };
  const changePage = () => {
    return setPag (prevState => prevState + 1);
  };


  useEffect (
    () => {
      if (valueSab === '') {
        return;
      }
      const fechData = async () => {
        setIsLoading (true);
        try {
          const objimage = await findImages ([valueSab], [pag]);
          setDate (date=>[...date,...objimage.data.hits]);
        
        } catch (error) {
          setIsError ({isEr: true, messageEr: error.message});
        } finally {
          return setIsLoading (false);
        }
      };
      fechData ();
    },
    [pag,valueSab]
  );


  return (
    <div>

      {isLoading ? <Loader /> : <Searchbar changeValueSab={changeValueSab} />}
      <ImageGallery object={date} />
      {isError.isEr ? <p class="error">{isError.messageEr}</p> : null}
      {date.length !== 0 ? <Button pagChange={changePage} /> : null}
    </div>
  );
};
