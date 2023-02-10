export const getCurrentClass = (classes, field) => {
  const current = classes?.find(classItem => classItem?.isCurrent === true);

  if (field) return current[field];

  return current;
}