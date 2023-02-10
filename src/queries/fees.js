// Create operations
export const createFee = async (formData) => {
  const res = await fetch('http://localhost:5000/api/v1/fees/insert', {
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
export const getFees = async () => {
  const res = await fetch('http://localhost:5000/api/v1/fees/list');
  const data = res.json();

  return data;
}