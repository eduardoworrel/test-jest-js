const {removeDots} = require('./removeDots')

test('Remove dots',()=>{
    expect(removeDots('...-...'))
    .toBe('-')
})