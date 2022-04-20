export const getOptions = (options, id="id", label="name") => {
  return options.map(option => ({
    value: option[id],
    label: option[label],
  }))
}