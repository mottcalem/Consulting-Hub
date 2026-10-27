import { randomInt, randomUUID } from "node:crypto";

const lifetime = 10 * 60 * 1000;
const challenges = new Map<string, { answer: string; expires: number }>();
const submissions = new Map<string, { count: number; expires: number }>();

function prune<T extends { expires: number }>(entries: Map<string, T>, now: number) {
  for (const [key, entry] of entries) {
    if (entry.expires <= now) entries.delete(key);
  }
}

export function createChallenge(now = Date.now()) {
  prune(challenges, now);
  // Bound memory even when clients keep requesting new challenges.
  if (challenges.size >= 5000) return null;
  const left = randomInt(1, 20);
  const right = randomInt(1, 10);
  const id = randomUUID();
  challenges.set(id, { answer: String(left + right), expires: now + lifetime });
  return { id, question: `${left} + ${right} = ?` };
}

export function verifyChallenge(id: unknown, answer: unknown, now = Date.now()) {
  if (typeof id !== "string") return false;
  const challenge = challenges.get(id);
  // Every attempt consumes the challenge, including incorrect answers.
  challenges.delete(id);
  return !!challenge && challenge.expires > now &&
    typeof answer === "string" && answer.trim() === challenge.answer;
}

export function allowSubmission(email: string, now = Date.now()) {
  prune(submissions, now);
  const key = email.toLowerCase();
  const previous = submissions.get(key);
  if (previous && previous.count >= 3) return false;
  if (!previous && submissions.size >= 5000) return false;
  submissions.set(key, {
    count: (previous?.count ?? 0) + 1,
    expires: previous?.expires ?? now + 15 * 60 * 1000,
  });
  return true;
}
