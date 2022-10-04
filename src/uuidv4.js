const specTemplate = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'

function uuidV4 () {
  return specTemplate.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const generate = (q = 1) => {
  return Array(q)
    .fill(null)
    .map(_ => uuidV4())
}

module.exports = {
  generate
}
