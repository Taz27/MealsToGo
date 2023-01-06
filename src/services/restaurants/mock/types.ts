export interface RestuarantTransformed {
  businessStatus: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  icon: string;
  name: string;
  openingHours: {
    openNow: boolean;
  };
  photos: string[];
  placeId: string;
  plusCode: {
    compoundCode: string;
    globalCode: string;
  };
  priceLevel: number;
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  userRatingsTotal: number;
  vicinity: string;
  isOpenNow: boolean;
  isClosedTemporarily: boolean;
}
