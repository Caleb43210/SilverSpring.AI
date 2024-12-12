export interface Message {
  type: 'bot' | 'user';
  text: string;
}

export interface ChatMessage {
  message: Message;
  isLast: boolean;
}