import "server-only";

import {
  type InsertUser,
  type SelectUser,
  selectUserValidator,
} from "./schema";

import { users } from "@/shared/database/schema";
import { getConnection } from "@/shared/database/lib";

import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

export async function register(insertUser: InsertUser): Promise<SelectUser> {
  insertUser.password = await hash(insertUser.password, 10);

  const connection = await getConnection();
  const insertResult = await connection.insert(users).values(insertUser);

  const createdUser = await connection.query.users.findFirst({
    where: eq(users.id, insertResult[0].insertId),
  });

  return selectUserValidator.parse(createdUser);
}

export async function getFullUserByEmail(
  email: string
): Promise<typeof users.$inferSelect | null> {
  const connection = await getConnection();

  const user = await connection.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (user) {
    return user;
  }

  return null;
}

export async function getByEmail(email: string): Promise<SelectUser | null> {
  const connection = await getConnection();

  const user = await connection.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (user) {
    return selectUserValidator.parse(user);
  }

  return null;
}
