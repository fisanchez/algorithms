require_relative '../my_solution'
require 'faker'
require 'pry-byebug'

include MySolution

describe 'My solution' do
  it 'reverses the string in place' do
    name = Faker::Name.name
    name_dup = name.dup

    expect(
      reverse!(
        str: name,
        left_index: 0,
        right_index: name.length - 1
      )
    ).to eq(name_dup.reverse)
  end
  it 'reverses order of list of words' do
    # > "Lorem ipsum blah"
    words = 'cake pound steal'

    expect(reverse_words!(words)).to eq('steal pound cake')
  end
end
