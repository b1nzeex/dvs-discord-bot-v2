// Will capitalize the first letter of a string
const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Will convert a SNAKE_CASE string to a human readable string (e.g. "SNAKE_CASE" -> "Snake Case")
const snakeToHuman = (str: string) => {
  return str
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

export { capitalize, snakeToHuman };
