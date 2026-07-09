export interface AgendaItem {
  id: string;
  title: string;
  speaker: string;
  time: string;
  duration: number; // in minutes
}

export interface Meeting {
  id: string;
  name: string;
  dayOfWeek: number; // 0 = Sunday, 6 = Saturday
  time: string;
  duration: number; // in minutes
  location: string;
  items: AgendaItem[];
}
