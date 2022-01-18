function helperUnderTen(num) {
  return num < 10 ? "0" + num : num;
}

function truncatorText(text, maxLength = 10) {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
}

module.exports = { helperUnderTen, truncatorText };
