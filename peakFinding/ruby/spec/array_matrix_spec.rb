require_relative '../ArrayMatrix'
require_relative '../problem_variables'
require 'pry-byebug'

describe ArrayMatrix do
  before(:each) do
    @matrix = ArrayMatrix.new(ProblemVariables::MATRIX)
  end

  it 'returns the max value with index in a column' do
    expect(@matrix.col_max(5).should(eq({ val: 11, coordinates: [4, 5] })))
  end

  it 'returns neighbor values of a column' do
    col_max = @matrix.col_max(5)
    neighbors = @matrix.neighbor_values(
      coordinates: col_max[:coordinates]
    )

    expect(neighbors.should eq(
      {
        left: { val: 12, coordinates: [4, 4] },
        right: { val: 10, coordinates: [4, 6] }
      }
    ))
  end

  it 'finds larger neighbor' do
    expect(
      @matrix.largest_neighbor(
        {
          left: { val: 12, coordinates: [4, 4] },
          right: { val: 10, coordinates: [4, 6] }
        }
      ).should eq({left: { val: 12, coordinates: [4, 4] }})
    )
  end

  context 'class methods' do
    it 'creates a subset array' do
      subset_matrix = ArrayMatrix.subset(0, 4, ProblemVariables::MATRIX)
      expect(subset_matrix.should eq(
        ProblemVariables::LEFT_SUBSET
      ))
    end
  end
end
