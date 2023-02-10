// Create operations
export const createTransaction = async (formData) => {
  const res = await fetch('http://localhost:5000/api/v1/transactions/insert', {
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
export const getTransactions = async () => {
  const res = await fetch('http://localhost:5000/api/v1/transactions/list');
  const data = res.json();

  return data;
}