export enum PropertyType {
    Sell = 'sell',
    Buy = 'buy'
}

export interface IPropertyPreview {
    title: string;
    floors: number;
    bedroom: number;
    bathroom: number;
    square: number;
    type: PropertyType;
    price: number;
    place: string;
    photoURLs: string;
    videoURLs: string;
    latitude: string;
    longitude: string;
    address: string;
}


export interface IPropertyDetails extends IPropertyPreview {
    description: string;
    isApproved: boolean;
    authorID: number;
    categoryID: number;
    geoHash: string;
    newConstruction: boolean;
    built: number;
    phone: string;
    agentID: number;
    photo: string;
    photoURLs: string;
    videoURLs: string;
    open_doors: any;
    delete: boolean;
}
