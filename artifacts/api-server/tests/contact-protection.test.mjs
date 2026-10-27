import assert from "node:assert/strict";
import { test } from "node:test";
import { createChallenge, verifyChallenge, allowSubmission } from "../src/lib/contact-protection.ts";

function answer(challenge) {
  const [left, right] = challenge.question.match(/\d+/g).map(Number);
  return String(left + right);
}

test("requires a valid, single-use answer", () => {
  assert.equal(verifyChallenge(undefined, "1"), false);
  assert.equal(verifyChallenge("forged-id", "1"), false);
  const challenge = createChallenge();
  assert.equal(verifyChallenge(challenge.id, answer(challenge)), true);
  assert.equal(verifyChallenge(challenge.id, answer(challenge)), false);
});

test("wrong answers consume the challenge", () => {
  const challenge = createChallenge();
  assert.equal(verifyChallenge(challenge.id, "999"), false);
  assert.equal(verifyChallenge(challenge.id, answer(challenge)), false);
});

test("expired challenges are rejected", () => {
  const challenge = createChallenge(1000);
  assert.equal(verifyChallenge(challenge.id, answer(challenge), 601000), false);
});

test("limits repeated submissions with case-insensitive email and resets after expiry", () => {
  const email = "sender@example.com";
  for (let i = 0; i < 3; i++) assert.equal(allowSubmission(email, 1000), true);
  assert.equal(allowSubmission(email.toUpperCase(), 1001), false);
  assert.equal(allowSubmission("another@example.com", 1001), true);
  assert.equal(allowSubmission(email, 901000), true);
});
