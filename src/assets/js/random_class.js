export function randomClass(firstClass, secondClass) {
  let rClass;
  0.5 - Math.random() > 0 ? (rClass = firstClass) : (rClass = secondClass);
  return rClass;
}
