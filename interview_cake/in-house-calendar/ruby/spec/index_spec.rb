require_relative '../index'
require_relative '../given_solution'

SIMPLE_CALENDARS =  [[1,3], [2,4]]
MEDIUM_LIST = [
  [0,1],
  [3,5],
  [4,8],
  [10,12],
  [9,10]
]

describe 'index' do
  describe '#merge_ranges' do
    it 'merges a size of two' do
      expect(merge_ranges(SIMPLE_CALENDARS)).to eq([[1,4]])
    end
    it 'merges a bigger list' do
      expect(merge_ranges(MEDIUM_LIST)).to eq([[0,1],[3,8],[9,12]])
    end
  end
end

include Solutions

describe 'given_solution' do
  describe '#merge_ranges' do
    it 'merges a size of two' do
      expect(MergingMeetingTimes.merge_ranges(SIMPLE_CALENDARS)).to eq([[1,4]])
    end
    it 'merges a bigger list' do
      expect(merge_ranges(MEDIUM_LIST)).to eq([[0,1],[3,8],[9,12]])
    end
  end
end

