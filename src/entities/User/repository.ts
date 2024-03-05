import "server-only";

import {
  type InsertUser,
  type SelectUser,
  selectUserValidator,
} from "./schema";

import { selectOrganizationValidator } from "../Organization/schema";

import { users } from "@/shared/database/schema";
import { getConnection, extractColumns } from "@/shared/database/lib";

import { z } from "zod";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

const emailValidator = z.string().trim().toLowerCase().email();

export async function register(
  insertUser: InsertUser
): Promise<SelectUser | null> {
  insertUser.password = await hash(insertUser.password, 10);

  try {
    const connection = await getConnection();
    const insertResult = await connection.insert(users).values(insertUser);

    const createdUser = await connection.query.users.findFirst({
      where: eq(users.id, insertResult[0].insertId),
      columns: extractColumns(selectUserValidator),
      with: { organization: extractColumns(selectOrganizationValidator) },
    });

    return selectUserValidator.parse(createdUser);
  } catch {
    return null;
  }
}

export async function getFullUserByEmail(
  email: string
): Promise<typeof users.$inferSelect | null> {
  const connection = await getConnection();

  const parsedEmail = emailValidator.safeParse(email);
  if (!parsedEmail.success) return null;
  email = parsedEmail.data;

  const user = await connection.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (user) {
    return user;
  }

  return null;
}

export async function getUserByEmail(
  email: string
): Promise<SelectUser | null> {
  const connection = await getConnection();

  const parsedEmail = emailValidator.safeParse(email);
  if (!parsedEmail.success) return null;
  email = parsedEmail.data;

  const user = await connection.query.users.findFirst({
    where: eq(users.email, email),
    columns: extractColumns(selectUserValidator),
    with: { organization: extractColumns(selectOrganizationValidator) },
  });

  if (!user) return null;
  return selectUserValidator.parse(user);
}

export async function getUserById(id: number): Promise<SelectUser | null> {
  const connection = await getConnection();

  const user = await connection.query.users.findFirst({
    where: eq(users.id, id),
    columns: extractColumns(selectUserValidator),
    with: { organization: extractColumns(selectOrganizationValidator) },
  });

  if (!user) return null;
  return selectUserValidator.parse(user);
}
