import axios from 'axios';
import Notiflix from 'notiflix';
let perPage;
function getApi(inputValue, page) {
  perPage = 40;
  const urlAPI = 'https://pixabay.com/api/?';
  const searchParams = new URLSearchParams({
    key: '37724353-7d1c51f4a49831c7577e79af3',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    maxHeight: 300,
    safesearch: true,
    per_page: perPage,
    page: page,
  });
  return urlAPI + searchParams.toString();
}

export async function getRequest(inputValue, page) {
  const url = getApi(inputValue, page);
  return axios
    .get(url)
    .then(response => response)
    .catch(error => Notiflix.Notify.warning(error));
}
