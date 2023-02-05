// Create operations
export const createStudent = async (formData) => {
  const res = await fetch('http://localhost:5000/api/v1/students/insert', {
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
export const getStudents = async () => {
  const res = await fetch('http://localhost:5000/api/v1/students/list');
  const data = res.json();

  return data;
}

export const getStudent = async (id) => {
  const res = await fetch('');
  const data = res.json();

  return data;
}

// Update operations
export const updateStudent = async (id, FormData) => {
  const res = await fetch('');
  const data = res.json();

  return data;
}

// Delete operations
export const deleteStudent = async (id) => {
  const res = await fetch('');
  const data = res.json();

  return data;
}