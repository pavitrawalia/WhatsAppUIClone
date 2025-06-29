import { Faker, en } from '@faker-js/faker';

const faker = new Faker({ locale: en });

class User {
  constructor() {
    this.id = faker.string.uuid();
    this.name = faker.person.fullName();
    this.profilePicture = faker.image.avatar();
  }
}

export class Message {
  constructor(isMainUser, msg, date) {
    this.id = faker.string.uuid();
    this.msg = msg ||
  faker.helpers.arrayElement([
    "Hey, how are you doing?",
    "Let’s meet after work.",
    "I forgot to tell you something!",
    "Guess what happened today?",
    "It’s been a long day.",
    "Wanna grab coffee?",
    "I'm on my way.",
    "That’s awesome news!",
    "You’re kidding, right?",
    "Seriously, what the heck!"
  ]);
    this.isMainUser = isMainUser;
    this.date = date || faker.date.recent();
  }
}

export const mainUser = new User();

export const contacts = Array.from({ length: 15 }, () => new User());

export const contactsMessages = contacts.map((contact) => {
  const messages = Array.from({ length: 50 }, (_, i) =>
    (i + 1) % 2 === 0 ? new Message(true) : new Message(false)
  ).filter((m) => m.msg);

  return { contact, messages };
});

export const initiateNewChat = () => {
  const contact = new User();
  const messages = [];
  return { contact, messages };
}