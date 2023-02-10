// Create operations
export const createUser = async (formData) => {
  const res = await fetch('http://localhost:5000/api/v1/users/insert', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  const data = res.json();

  return data;
}

// Read operations
export const getUsers = async () => {
  const res = await fetch('http://localhost:5000/api/v1/users/list');
  const data = res.json();

  return data;
}

export const getUser = async (uid) => {
  const res = await fetch(`http://localhost:5000/api/v1/users/single/${uid}`);
  const data = res.json();

  return data;
}