export const filterOutNonValues = (data) => {
  console.log('data@', data);
  const filteredData = data.filter((singularData) => (
    singularData !== null || undefined
  ));
    console.log('filteredData', filteredData);
  return filteredData;
};
