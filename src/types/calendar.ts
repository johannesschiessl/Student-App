export interface Event {
  id: number;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  room?: string;
  isAllDay: boolean;
  color: string;
  icon?: string;
}