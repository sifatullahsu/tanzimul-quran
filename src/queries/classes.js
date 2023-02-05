// Create operations
export const createClass = async (formData) => {
  const res = await fetch('http://localhost:5000/api/v1/classes/insert', {
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
export const getClasses = async () => {
  const res = await fetch('http://localhost:5000/api/v1/classes/list');
  const data = res.json();

  return data;
}