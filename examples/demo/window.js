import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:49156';

export async function createWindow() {
  const response = await fetch(`${BASE_URL}/window/create`, {
    method: 'POST',
  });
  return await response.json();
}

export async function batchCreateWindows(max) {
  const results = [];
  const count = Number(max) || 1;
  for (let i = 0; i < count; i++) {
    try {
      const result = await createWindow();
      results.push(result);
    } catch (error) {
      console.error('cant create profile', error);
    }
  }
  return results;
}

export async function getAllWindows() {
  const response = await fetch(`${BASE_URL}/window/all`);
  return await response.json();
}
