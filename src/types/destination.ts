export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export type DepartureId = 'chengdu' | 'chongqing' | 'xian';

export type TransportType = 'plane' | 'highspeed' | 'self_drive' | 'bus';

export interface TransportOption {
  type: TransportType;
  duration: string;
  cost: string;
  pros: string[];
  cons: string[];
}

export type TripPlanType = 'short' | 'regular' | 'deep';

export interface TripPlan {
  type: TripPlanType;
  daysLabel: string;
  highlights: string[];
}

export interface FoodItem {
  name: string;
  avgPrice: string;
  reason: string;
  area?: string;
}

export interface FoodRecommendations {
  localSpecialties: FoodItem[];
  popularSnacks: FoodItem[];
  valueRestaurants: FoodItem[];
}

export interface HotelItem {
  name: string;
  priceRange: string;
  location: string;
  advantages: string[];
}

export interface HotelRecommendations {
  budget: HotelItem[];
  midRange: HotelItem[];
  highEnd: HotelItem[];
}

export interface Destination {
  id: string;
  name: string;
  summary: string;
  tags: string[];
  bestSeasons: Season[];
  heatScore: number;
  heroImage: string;
  supportedDepartures: DepartureId[];
  ctripUrl?: string;
  xiaohongshuKeyword?: string;
  transportOptions: TransportOption[];
  tripPlans: TripPlan[];
  food: FoodRecommendations;
  hotels: HotelRecommendations;
}

