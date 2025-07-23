let filterName = require('../input');

describe('is name valid', () => {
  it('for check', ()=> {
    expect(filterName()).toBe('UnKnown')
  })

  it('for space is removed', () => {
    expect(filterName('hassan ')).toBe('hassan')
  })

    it('for name.length < 10', () => {
      expect(filterName('hassan-hussien-hassan')).toBe('hassan-hus')
  })

    it('for remove under score', () => {
      expect(filterName('_hassan')).toBe('hassan')
  })
})