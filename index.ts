function underTen(num: number): string | number {
  return num < 10 ? "0" + num : num;
}

function truncatorText(text: string, maxLength: number = 10): string {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
}

export default { underTen, truncatorText };
