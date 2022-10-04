const { generate } = require('./uuidv4.js')

const specRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

describe('uuidV4', () => {
  it('should return an array with a string by default', () => {
    const idsArray = generate()

    expect(Array.isArray(idsArray)).toBe(true)

    expect(idsArray.length).toBe(1)

    expect(typeof idsArray[0]).toBe('string')
  })

  it('should return an string whose pattern matches the uuidv4 spec', () => {
    const [id] = generate()
    const matchesSpec = specRegex.test(id)

    expect(matchesSpec).toBe(true)
  })

  it('should return an array of strings if a quantity param is specified', () => {
    const idsArray = generate(5)

    expect(idsArray.length).toBe(5)
  })

  it('should return an error if the quantity param is not valid', () => {
    try {
      generate(-1)
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError)
    }
  })
})
