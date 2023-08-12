import request from "./https.api";

const token = process.env.REACT_APP_ADMIN_TOKEN;

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
