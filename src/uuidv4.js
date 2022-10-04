const uuidV4 = () => {
  const specTemplate = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'

  return specTemplate.replace(/[xy]/g, templateChar => {
    const randomChar = (Math.random() * 16) | 0
    const value = templateChar === 'x' ? randomChar : (randomChar & 0x3) | 0x8
    return value.toString(16)
  })
}

const generate = (quantity = 1) => {
  if (isNaN(quantity) || quantity <= 0) {
    throw new TypeError('Quantity must be a positive integer')
  }

  return Array(quantity)
    .fill(null)
    .map(uuidV4)
}

module.exports = {
  generate
}
