# frozen_string_literal: true

# Example matrix
# [ 4,  5,  6,  7,  8,  7,  6,  5,  4,  3,  2],
# [ 5,  6,  7,  8,  9,  8,  7,  6,  5,  4,  3],
# [ 6,  7,  8,  9, 10,  9,  8,  7,  6,  5,  4],
# [ 7,  8,  9, 10, 11, 10,  9,  8,  7,  6,  5],
# [ 8,  9, 10, 11, 12, 11, 10,  9,  8,  7,  6],
# [ 7,  8,  9, 10, 11, 10,  9,  8,  7,  6,  5],
# [ 6,  7,  8,  9, 10,  9,  8,  7,  6,  5,  4],
# [ 5,  6,  7,  8,  9,  8,  7,  6,  5,  4,  3],
# [ 4,  5,  6,  7,  8,  7,  6,  5,  4,  3,  2],
# [ 3,  4,  5,  6,  7,  6,  5,  4,  3,  2,  1],
# [ 2,  3,  4,  5,  6,  5,  4,  3,  2,  1,  0]

class ArrayMatrix
  attr_accessor :raw

  def initialize(array)
    @raw = array
  end

  def columns
    @raw.first.count
  end

  def rows
    @raw.count
  end

  def col_max(column)
    values = column_values(column)
    values.sort_by { |hash| hash[:val] }.last
  end

  # [ROW[COLUMN]]
  def column_values(column)
    @raw.each_with_index.map do |row, index|
      val = row[column]
      coordinates = [ index, column ]
      { val: val, coordinates: coordinates }
    end
  end

  def neighbor_values(coordinates:)
    y,x = coordinates
    left_col_values = col_max(x - 1)
    right_col_values = col_max(x + 1)

    {
      left: left_col_values,
      right: right_col_values
    }
  end
end
