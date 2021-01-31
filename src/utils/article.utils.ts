export const slugify = (title: string): string => {
  return title
    .split(" ")
    .map(word => word.toLowerCase)
    .join("-")
}
