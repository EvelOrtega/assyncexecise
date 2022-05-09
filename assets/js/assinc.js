/*

fetch("https://api.com/", {
  method: "GET",
  cache: "no-cache",
})
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://api.com/", {
  method: "Post",
  cache: "no-cache",
  body: JSON.stringify(data),
})
  .then((reponse) => response.json())
  .then((json) => console.log(json));
*/

const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    return json.webpurl;
  } catch (e) {
    console.log(e.messege);
  }
};

const loadImg = async () => {
  catImg.src = await getCats();
};
catBtn.addEventListener("click", loadImg);

loadImg();
