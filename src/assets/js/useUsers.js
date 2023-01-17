const API = "https://randomuser.me/api";
export const getUsers = async () => {
  const urlApi = `${API}/?results=25`;
  const response = await fetch(urlApi);
  const data = await response.json();
  return data.results;
};

export const renderTemplate = (img, name, last, date) => {
  const template = `
    <div class="coment-contianer">
    <div class="info">
      <img src="${img}" alt="">
      <div class="">
        <p class="name">${name} ${last}</p>
        <small class="date">Hace 2 meses</small>
      </div>
    </div>
    <div class="body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At repellendus, quis quasi obcaecati cum perspiciatis est accusantium veritatis praesentium dolorem, molestiae inventore provident hic temporibus?</p>
    </div>
  </div>
  `;
  return template;
};
