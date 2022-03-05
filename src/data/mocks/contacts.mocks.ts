import { Contact } from "../../domain/entity/contact";
import avatar_man from "../../../src/presentation/assets/avatar_man.jpg";
import avatar_girl from "../../../src/presentation/assets/avatar_girl.jpg";

export const ContactMock: Contact[] = [
  {
    avatar: avatar_girl,
    name: "Sophia Lúcia Porto",
    status: "online",
    status_text: "online",
    messages: [],
  },
  {
    avatar: avatar_man,
    name: "Kevin Ruan Iago Fogaça",
    status: "offline",
    status_text: "online há 50min",
    messages: [],
  },
];
