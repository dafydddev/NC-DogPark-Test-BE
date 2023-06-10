import { UserRecord } from "firebase-admin/lib/auth/user-record";
import * as admin from "firebase-admin";
const auth = admin.auth();

export function addNewUser(): Promise<UserRecord> {
  const email = "billy@example.com";
  const password = "abc1234!";
  return auth.createUser({ email, password }).then((user) => user);
}

export function getUserByID(): Promise<UserRecord> {
  const demoID = "FhvfJs5nVpRYJolSfooDSQ8Pwfq1";
  return auth.getUser(demoID).then((user) => user);
}
