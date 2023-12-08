import { createTRPCRouter, protectedProcedure } from "../trpc";
import { faker } from "@faker-js/faker";
import { nanoid } from "nanoid";

const members = Array.from({ length: 12 }).map((i) => {
  return {
    id: nanoid(),
    name: faker.person.fullName(),
    role: faker.person.jobTitle(),
    image: faker.image.avatar(),
    twitter: faker.internet.url(),
    linkedin: faker.internet.url(),
  };
});

export const memberRouter = createTRPCRouter({
  getMembers: protectedProcedure.query(() => {
    return members;
  }),
});
