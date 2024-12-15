export interface SpeakerType {
  id: string;
  name: string;
  img: string;
  work: string;
}

export interface AgendaItem {
  id: string;
  hour: string;
  theme: string;
  description: (string | [string, string])[];
}

export interface EventType {
  id: string;
  type: string;
  title: string;
  dateMonth: string;
  dateDay: string;
  place: string;
  dateYear: string;
  img: string;
  description: string;
  tip: string;
  slug: string;
  conferenceDate?: string;
  conferenceTitle?: string;
  conferencePlace?: string;
  conferenceDesc?: string;
  conferencePic1?: string;
  conferencePic2?: string;
  conferenceDays?: number;
  conferenceSpeakers?: number;
  conferenceRestaurants?: number;
  conferenceBooks?: number;
  eventSpeakersList: BoardType[];
  conferenceDay1?: Array<{
    id: string;
    hour: string;
    theme: string;
    description: Array<[string, string] | string>;
  }>;
  conferenceDay2?: Array<{
    id: string;
    hour: string;
    theme: string;
    description: Array<[string, string] | string>;
  }>;
  conferenceQuote?: {
    id: string;
    name: string;
    work: string;
    quotes: string[];
    img: string;
  };
  conferencePackets?: {
    id: string;
    for: string;
    price: string;
    benefits: string[];
  }[];
  eventDescription?: string;
  eventPurpose?: string;
  eventImg?: string;
  eventAgenda?: Array<{
    id: string;
    hour: string;
    theme: string;
    description: Array<[string, string] | string>;
  }>;
  poedinciPrice?: number;
  kompaniiPrice?: number;
}

export interface AgendaItem {
  id: string;
  hour: string;
  theme: string;
  description: (string | [string, string])[];
}

export interface ResearchType {
  id: string;
  title: string;
  img: string;
  description: string;
  tip: string;
  slug: string;
}

export interface ReplyType {
  id: string;
  author: string;
  text: string;
  time: number;
  avatar: string;
}

export interface CommentType {
  id: string;
  author: string;
  text: string;
  time: number;
  avatar: string;
  likes: number;
  comments: number;
  replies: ReplyType[];
}

export interface BlogType {
  id: string;
  title: string;
  description: string;
  img: string;
  tema: string;
  tip: string;
  author: string;
  date: string;
  slug: string;
  authorAvatar: string;
  likes: number;
  hearts: number;
  commentsNo: number;
  titles: string[];
  descriptions: string[];
  advices: string[];
  conclusion: string;
  comments: CommentType[];
}

export interface JobType {
  id: string;
  position: string;
  img: string;
}

export interface BoardType {
  id: string;
  name: string;
  work: string;
  img: string;
}

export interface Recommendation {
  id: string;
  img: string;
  name: string;
  time: number;
  text: string;
}

export interface Badge {
  id: string;
  icon: string;
  level: number;
  name: string;
}

export interface Connection {
  id: string;
  name: string;
  img: string;
}

export interface Card {
  id: string;
  for: string;
  date: string;
  place: string;
  img: string;
}

export interface UserType {
  name: string;
  surname: string;
  positionWork: string;
  placeLiving: string;
  phone: string;
  email: string;
  biography: string;
  recommendations: Recommendation[];
  badges: Badge[];
  connections: Connection[];
  cards: Card[];
}

export type ItemType = EventType | ResearchType | BlogType;

export function isEventType(item: ItemType): item is EventType {
  return (item as EventType).type !== undefined;
}
