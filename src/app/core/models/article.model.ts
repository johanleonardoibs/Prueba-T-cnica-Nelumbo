export interface Article {
  id: string,
  name: string,
  description: string,
  brand: string,
  price: number
  oldPrice: number
  rate: number,
  additionalData?: ArticleAdditionalData[],
  images: string[],
  followed: boolean,
}

export interface ArticleAdditionalData {
  key: string,
  value: string
}
