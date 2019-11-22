function makeRecord(element) {
  return {
    get: field => element.fields[field],
    id: element.id
  };
}

export default makeRecord;
