const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

function extractRegex(pattern) {
  const match = html.match(pattern);
  if (!match) throw new Error('Pattern not found');
  return match[1];
}

const rngCode = extractRegex(/const rng\s*=\s*([\s\S]*?);/);
const shuffleCode = extractRegex(/const shuffle\s*=\s*([\s\S]*?\};)/);
const attemptCode = extractRegex(/(function attemptDerangedAssignment[\s\S]*?\n\})/);

const sandbox = { console, rng: null, shuffle: null, attemptDerangedAssignment: null };
vm.createContext(sandbox);
vm.runInContext(`rng = ${rngCode}; shuffle = ${shuffleCode}; ${attemptCode}`, sandbox);

const { rng, shuffle, attemptDerangedAssignment } = sandbox;

// rng tests
for (let i = 0; i < 100; i++) {
  const n = rng(0, 5);
  assert(n >= 0 && n <= 5, 'rng out of range');
}

// shuffle tests
const arr = [1, 2, 3, 4, 5];
const shuffled = shuffle([...arr]);
assert.deepStrictEqual([...shuffled].sort(), arr, 'shuffle should keep elements');

// attemptDerangedAssignment basic rotation
const players = [
  { dataset: { lastRole: 'vanguard' } },
  { dataset: { lastRole: 'duellist' } },
  { dataset: { lastRole: 'strategist' } }
];
const res = attemptDerangedAssignment(players, { vanguard: 0, duellist: 0, strategist: 0, flex: 0 }, { vanguard: 0, duellist: 0, strategist: 0, flex: 0 });
assert(res && res.length === players.length, 'should return a rotation');
res.forEach((role, idx) => {
  assert.notStrictEqual(role, players[idx].dataset.lastRole, 'role should differ from last');
});

// attemptDerangedAssignment insufficient variety
const samePlayers = [
  { dataset: { lastRole: 'vanguard' } },
  { dataset: { lastRole: 'vanguard' } }
];
const res2 = attemptDerangedAssignment(samePlayers, { vanguard: 0, duellist: 0, strategist: 0, flex: 0 }, { vanguard: 0, duellist: 0, strategist: 0, flex: 0 });
assert.strictEqual(res2, null, 'should return null when variety is insufficient');

// attemptDerangedAssignment respect minimums
const playersMin = [
  { dataset: { lastRole: 'duellist' } },
  { dataset: { lastRole: 'vanguard' } }
];
const res3 = attemptDerangedAssignment(
  playersMin,
  { vanguard: 0, duellist: 0, strategist: 0, flex: 0 },
  { vanguard: 0, duellist: 2, strategist: 0, flex: 0 }
);
assert.strictEqual(res3, null, 'should return null when rotation violates minimums');

console.log('All random function tests passed');
