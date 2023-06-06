import dentalFloss from "../assets/productListImages/Dental Floss.jpeg";
import dentalNight from "../assets/productListImages/Dental Night Guard.jpeg";
import dentalimg1 from "../assets/productListImages/Teeth Whitening Kit.jpeg";
import dentalimg3 from "../assets/productListImages/goby-jEwi-9on5IE-unsplash.jpg";
import dentalimg5 from "../assets/productListImages/th (1).jpeg";
import dentaltootpase from "../assets/productListImages/Toothpaste.jpeg";




export const banner = [
  {
    entity_id: 9,
    slider_id: "3",
    resource_map_id: 3,
    resource_type: "local_image",
    resource_path:
      "http://cf467543a5.nxcli.net/media/codilar/banner/images/banner1.1_1_.png",
    is_enabled: 1,
    created_at: "2022-02-17 07:12:05",
    updated_at: "2022-08-02 07:44:49",
    title: "Fashion Slider",
    alt_text: "",
    link: "",
    sort_order: 1,
    resource_map: {
      entity_id: 3,
      title: "Fashion ",
      created_at: "2022-02-17 07:10:27",
      updated_at: "2022-02-17 07:12:51",
    },
  },
  {
    entity_id: 10,
    slider_id: "3",
    resource_map_id: 3,
    resource_type: "local_image",
    resource_path:
      "http://cf467543a5.nxcli.net/media/codilar/banner/images/mybannerrrrrrrrrrrr_1_.png",
    is_enabled: 1,
    created_at: "2022-02-17 07:13:54",
    updated_at: "2022-07-28 11:17:10",
    title: "Fashion Slider",
    alt_text: "",
    link: "",
    sort_order: 2,
    resource_map: {
      entity_id: 3,
      title: "Fashion ",
      created_at: "2022-02-17 07:10:27",
      updated_at: "2022-02-17 07:12:51",
    },
  },
];

export const newArrival1 = [
  {
    id: 7,
    brand: "66",
    name: "Electric Toothbrush",
    sku: "Electric Toothbrush",
    short_description: {
      html: "<p>A high-powered electric toothbrush for superior dental hygiene. It features multiple cleaning modes and comes with replaceable brush heads.</p>",
    },
    image: {
      url: dentalimg3,
    },
    price_range: {
      minimum_price: {
        regular_price: {
          value: 99,
          currency: "USD",
        },
        final_price: {
          value: 99,
          currency: "USD",
        },
        fixed_product_taxes: [],
      },
      maximum_price: {
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
        fixed_product_taxes: [],
      },
    },
    product_review: "3.1",
    type_id: "simple",
  },
  {
    id: 155,
    brand: "14",
    name: "Teeth Whitening Kit",
    sku: "Teeth Whitening Kit",
    short_description: {
      html: "<p>A complete teeth whitening kit with LED light technology. Achieve a brighter smile with ease using the included whitening gel and mouth tray.</p>",
    },
    image: {
      url: dentalimg1,
    },
    price_range: {
      minimum_price: {
        regular_price: {
          value: 200,
          currency: "USD",
        },
        final_price: {
          value: 200,
          currency: "USD",
        },
        fixed_product_taxes: [],
      },
      maximum_price: {
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
        fixed_product_taxes: [],
      },
    },
    product_review: "2.4",
    type_id: "simple",
  },
  {
    id: 152,
    brand: "14",
    name: "Dental Floss Picks",
    sku: "Dental Floss Picks",
    short_description: {
      html: "<p>A pack of dental floss picks with built-in toothpick ends for convenient oral care. The floss is designed to glide smoothly between teeth for effective cleaning.</p>",
    },
    image: {
      url: dentalFloss,
    },
    price_range: {
      minimum_price: {
        regular_price: {
          value: 100,
          currency: "USD",
        },
        final_price: {
          value: 100,
          currency: "USD",
        },
        fixed_product_taxes: [],
      },
      maximum_price: {
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
        fixed_product_taxes: [],
      },
    },
    product_review: "3.2",
    type_id: "simple",
  },
  {
    id: 12,
    brand: "14",
    name: "Water Flosser",
    sku: "Water Flosser",
    short_description: {
      html: "<p>An advanced water flosser that uses water pressure to remove plaque and debris between teeth and along the gumline. It has adjustable settings for personalized cleaning.</p>",
    },
    image: {
      url: dentalimg5,
    },
    price_range: {
      minimum_price: {
        regular_price: {
          value: 30,
          currency: "USD",
        },
        final_price: {
          value: 30,
          currency: "USD",
        },
        fixed_product_taxes: [],
      },
      maximum_price: {
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
        fixed_product_taxes: [],
      },
    },
    product_review: "2.1",
    type_id: "simple",
  },
  {
    id: 39,
    brand: "13",
    name: "Dental Night Guard",
    sku: "Dental Night Guard",
    short_description: {
      html: "<p>A custom-fit dental night guard to protect teeth from grinding or clenching during sleep. Made of durable and comfortable materials for long-lasting use.</p>",
    },
    image: {
      url: dentalNight,
    },
    price_range: {
      minimum_price: {
        regular_price: {
          value: 30,
          currency: "USD",
        },
        final_price: {
          value: 30,
          currency: "USD",
        },
        fixed_product_taxes: [],
      },
      maximum_price: {
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
        fixed_product_taxes: [],
      },
    },
    product_review: "4.0",
    type_id: "simple",
  },
  {
    id: 36,
    brand: "14",
    name: "Toothpaste",
    sku: "Toothpaste",
    short_description: {
      html: "<p>A fluoride toothpaste with a refreshing mint flavor. It helps prevent cavities, strengthen enamel, and maintain fresh breath.</p>",
    },
    image: {
      url: dentaltootpase,
    },
    price_range: {
      minimum_price: {
        regular_price: {
          value: 100,
          currency: "USD",
        },
        final_price: {
          value: 100,
          currency: "USD",
        },
        fixed_product_taxes: [],
      },
      maximum_price: {
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
        fixed_product_taxes: [],
      },
    },
    product_review: "4.5",
    type_id: "simple",
  },
];

export const newArrival2 = [
  {
    id: 7,
    brand: "66",
    name: "Electric Toothbrush",
    sku: "Electric Toothbrush",
    short_description: {
      html: "<p>A high-powered electric toothbrush for superior dental hygiene. It features multiple cleaning modes and comes with replaceable brush heads.</p>",
    },
    image: {
      url: dentalimg3,
    },
    price_range: {
      minimum_price: {
        regular_price: {
          value: 99,
          currency: "USD",
        },
        final_price: {
          value: 99,
          currency: "USD",
        },
        fixed_product_taxes: [],
      },
      maximum_price: {
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
        fixed_product_taxes: [],
      },
    },
    product_review: "3.1",
    type_id: "simple",
  },
  {
    id: 155,
    brand: "14",
    name: "Teeth Whitening Kit",
    sku: "Teeth Whitening Kit",
    short_description: {
      html: "<p>A complete teeth whitening kit with LED light technology. Achieve a brighter smile with ease using the included whitening gel and mouth tray.</p>",
    },
    image: {
      url: dentalimg1,
    },
    price_range: {
      minimum_price: {
        regular_price: {
          value: 200,
          currency: "USD",
        },
        final_price: {
          value: 200,
          currency: "USD",
        },
        fixed_product_taxes: [],
      },
      maximum_price: {
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
        fixed_product_taxes: [],
      },
    },
    product_review: "2.4",
    type_id: "simple",
  },
  {
    id: 152,
    brand: "14",
    name: "Dental Floss Picks",
    sku: "Dental Floss Picks",
    short_description: {
      html: "<p>A pack of dental floss picks with built-in toothpick ends for convenient oral care. The floss is designed to glide smoothly between teeth for effective cleaning.</p>",
    },
    image: {
      url: dentalFloss,
    },
    price_range: {
      minimum_price: {
        regular_price: {
          value: 100,
          currency: "USD",
        },
        final_price: {
          value: 100,
          currency: "USD",
        },
        fixed_product_taxes: [],
      },
      maximum_price: {
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
        fixed_product_taxes: [],
      },
    },
    product_review: "3.2",
    type_id: "simple",
  },
  {
    id: 12,
    brand: "14",
    name: "Water Flosser",
    sku: "Water Flosser",
    short_description: {
      html: "<p>An advanced water flosser that uses water pressure to remove plaque and debris between teeth and along the gumline. It has adjustable settings for personalized cleaning.</p>",
    },
    image: {
      url: dentalimg5,
    },
    price_range: {
      minimum_price: {
        regular_price: {
          value: 30,
          currency: "USD",
        },
        final_price: {
          value: 30,
          currency: "USD",
        },
        fixed_product_taxes: [],
      },
      maximum_price: {
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
        fixed_product_taxes: [],
      },
    },
    product_review: "2.1",
    type_id: "simple",
  },
  {
    id: 39,
    brand: "13",
    name: "Dental Night Guard",
    sku: "Dental Night Guard",
    short_description: {
      html: "<p>A custom-fit dental night guard to protect teeth from grinding or clenching during sleep. Made of durable and comfortable materials for long-lasting use.</p>",
    },
    image: {
      url: dentalNight,
    },
    price_range: {
      minimum_price: {
        regular_price: {
          value: 30,
          currency: "USD",
        },
        final_price: {
          value: 30,
          currency: "USD",
        },
        fixed_product_taxes: [],
      },
      maximum_price: {
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
        fixed_product_taxes: [],
      },
    },
    product_review: "4.0",
    type_id: "simple",
  },
  {
    id: 36,
    brand: "14",
    name: "Toothpaste",
    sku: "Toothpaste",
    short_description: {
      html: "<p>A fluoride toothpaste with a refreshing mint flavor. It helps prevent cavities, strengthen enamel, and maintain fresh breath.</p>",
    },
    image: {
      url: dentaltootpase,
    },
    price_range: {
      minimum_price: {
        regular_price: {
          value: 100,
          currency: "USD",
        },
        final_price: {
          value: 100,
          currency: "USD",
        },
        fixed_product_taxes: [],
      },
      maximum_price: {
        discount: {
          amount_off: 0,
          percent_off: 0,
        },
        fixed_product_taxes: [],
      },
    },
    product_review: "4.5",
    type_id: "simple",
  },
];
