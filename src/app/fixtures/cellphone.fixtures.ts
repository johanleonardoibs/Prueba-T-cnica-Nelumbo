import {Article} from "../core/models/article.model";
import {v4} from 'uuid';
import {FilterType} from "../core/models/filter.model";

const smartphoneNames = [{"brand":"Apple","model":"iPhone 13"},{"brand":"Apple","model":"iPhone 13 Pro"},{"brand":"Samsung","model":"Galaxy S21"},{"brand":"Samsung","model":"Galaxy Note 20"},{"brand":"Google","model":"Pixel 6"},{"brand":"Google","model":"Pixel 6 Pro"},{"brand":"OnePlus","model":"OnePlus 9"},{"brand":"OnePlus","model":"OnePlus 9 Pro"},{"brand":"Xiaomi","model":"Mi 11"},{"brand":"Xiaomi","model":"Redmi Note 10"},{"brand":"Huawei","model":"P50 Pro"},{"brand":"Huawei","model":"Mate 40 Pro"},{"brand":"Sony","model":"Xperia 1 III"},{"brand":"Sony","model":"Xperia 5 III"},{"brand":"Oppo","model":"Find X3 Pro"},{"brand":"Oppo","model":"Reno6 Pro"},{"brand":"Vivo","model":"X60 Pro"},{"brand":"Vivo","model":"V21"},{"brand":"Realme","model":"GT"},{"brand":"Realme","model":"8 Pro"},{"brand":"Nokia","model":"8.3 5G"},{"brand":"Nokia","model":"5.4"},{"brand":"Motorola","model":"Edge 20 Pro"},{"brand":"Motorola","model":"Moto G100"},{"brand":"Asus","model":"ROG Phone 5"},{"brand":"Asus","model":"Zenfone 8"},{"brand":"LG","model":"Wing"},{"brand":"LG","model":"Velvet"},{"brand":"ZTE","model":"Axon 30 Ultra"},{"brand":"ZTE","model":"Blade V30"}]
export const smartphoneBrands = ["Apple","Samsung","Google","OnePlus","Xiaomi","Huawei","Sony","Oppo","Vivo","Realme","Nokia","Motorola","Asus","LG","ZTE"];

const getRandomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateFakeSmartPhone = (): Article => {
  const elementNameIndex = getRandomNumber(0, smartphoneNames.length - 1)
  const randomRate = getRandomNumber(2, 5)
  const price = getRandomNumber(1000, 6000);
  const oldPrice = price + getRandomNumber(100, 300)

  return {
    name: smartphoneNames[elementNameIndex].model + ' ' + elementNameIndex,
    brand: smartphoneNames[elementNameIndex].brand,
    rate: randomRate,
    id: v4(),
    price: price,
    oldPrice: oldPrice,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    images: [
      'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/129558635_01/w=800,h=800,fit=pad',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPoC6JhlrIKhCiOI-QO3PqJxVT2EjAusmPw&s',
      'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/129558635_01/w=800,h=800,fit=pad',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPoC6JhlrIKhCiOI-QO3PqJxVT2EjAusmPw&s',
      'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/129558635_01/w=800,h=800,fit=pad',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPoC6JhlrIKhCiOI-QO3PqJxVT2EjAusmPw&s'
    ],
    additionalData: [{"key":"Brand","value":"Samsung"},{"key":"Model","value":"Galaxy S21"},{"key":"Operating System","value":"Android"},{"key":"Screen Size","value":"6.2 inches"},{"key":"Resolution","value":"2400 x 1080 pixels"},{"key":"RAM","value":"8 GB"},{"key":"Storage","value":"128 GB"},{"key":"Battery Capacity","value":"4000 mAh"},{"key":"Front Camera","value":"10 MP"},{"key":"Rear Camera","value":"12 MP + 64 MP + 12 MP"},{"key":"Processor","value":"Exynos 2100"},{"key":"Dimensions","value":"151.7 x 71.2 x 7.9 mm"},{"key":"Weight","value":"169 g"},{"key":"SIM Card","value":"Dual SIM"},{"key":"Network","value":"5G"},{"key":"Bluetooth","value":"v5.0"},{"key":"WiFi","value":"802.11 a/b/g/n/ac/ax"},{"key":"NFC","value":"Yes"},{"key":"Fingerprint Sensor","value":"Yes, under display"},{"key":"Water Resistance","value":"IP68"}],
    followed: false
  }
}

export const generateManySmartphones = (count: number = 5) => {
  return [...Array(count)].map(() => generateFakeSmartPhone())
}

export const getAvailableFilters = () => {
  return [
    {
      "name": "Marcas",
      "type": FilterType.SELECT,
      "options": smartphoneBrands
    },
    {
      "name": "Precio",
      "type": FilterType.RANGE,
    },
    {
      "name": "Calificaciones",
      "type": FilterType.RATE,
    }
  ]
}
