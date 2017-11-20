export interface IProductList {
    forestImg: string;
    description: string[];
    products: IProduct[];
}
export interface IProduct {
    name: string;
    starRating: number;
    frontImg: string;
    backImg: string;
    storyDescription: string[];
}
