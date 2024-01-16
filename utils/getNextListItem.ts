const getNextListItem = <T>(list: T[], value: T) => {
  const currentIdx = list.indexOf(value);
  const nextIdx = (currentIdx + 1) % list.length;
  const nextValue = list[nextIdx];
  return nextValue;
};

export default getNextListItem;
