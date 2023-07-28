import request from "./https.api";

const token = "5b4d2tg1fnxbg7xcrlsmmkoxkd0gthp1";

export const homeService = {
  getBanners,
};

function getBanners() {
  request(
    `rest/all/V1/codilar/bannerslider/slider/loadById/1`,
    "",
    "get",
    "",
    token
  );
}
