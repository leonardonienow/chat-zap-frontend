import { Message } from "./";

export type Contact = {
  avatar: string;
  name: string;
  status: "online" | "offline";
  status_text: string;
  messages: Message[];
};
