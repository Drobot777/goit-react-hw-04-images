import axios from 'axios';
export{findImages}

 async function findImages(name, pag){
  const bazUrl = 'https://pixabay.com/api/';
  const keyApi = 'key=37398613-53a7a48ec351839bec483185f';
  const auxiliaryUrl =
    '&image_type=photo&orientation=horizontal&per_page=12';
  const respons = await axios.get (
    `${bazUrl}?q=${name}&page=${pag}&${keyApi}${auxiliaryUrl}`
  );
  return respons;
}
