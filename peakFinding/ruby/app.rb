# frozen_string_literal: true

require_relative 'ArrayMatrix'
require_relative 'problem_variables'
require 'pry-byebug'

def find_peak(raw_matrix)
  matrix = ArrayMatrix.new(raw_matrix)

  puts 'Looking for peak'
  puts matrix.raw.map(&:inspect)

  mid_col = matrix.columns / 2

  # find subproblem sets
  # left side
  left_col_start = 0
  left_col_end = (mid_col - 1)

  # right side
  right_col_start = mid_col + 1
  right_col_end = matrix.columns

  col_maximum = matrix.col_max(mid_col)
  neighbors = matrix.neighbor_values(coordinates: col_maximum[:coordinates])

  if peak_found?(col_maximum: col_maximum, neighbors: neighbors)
    puts "You found yourself a peak! - #{col_maximum[:val]} at #{col_maximum[:coordinates]}"
    return col_maximum[:val]
  end

  largest_neighbor = matrix.largest_neighbor(neighbors)

  if largest_neighbor[:left]
    start_subset, end_subet = [left_col_start, (mid_col - 1)]
  else
    start_subset, end_subet = [(mid_col + 1), right_col_end]
  end

  array_subset = ArrayMatrix.subset(start_subset, end_subet, matrix.raw)
  puts 'Creating array subset'
  puts array_subset.map(&:inspect)

  find_peak(array_subset)
end

# No further subsets can be found
def peak_found?(col_maximum:, neighbors:)
  peak_found = neighbors.select do |key, neighbor|
    col_maximum[:val] >= (neighbor.fetch(:val) || -Float::INFINITY)
  end

  peak_found.count == 2
end

find_peak(ProblemVariables::MATRIX)
