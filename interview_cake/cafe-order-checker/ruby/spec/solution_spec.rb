require_relative '../solution.rb'
require 'pry-byebug'

include Solution

sad_path = {
  take_out_orders: [1, 3, 5],
  dine_in_orders: [2, 4, 6],
  served_orders: [1, 2, 4, 6, 5, 3]
}
happy_path = {
  take_out_orders: [17, 8, 24],
  dine_in_orders: [12, 19, 2],
  served_orders: [17, 8, 12, 19, 24, 2]
}

describe 'Solution' do
  describe 'recursive path' do
    it 'returns false' do
      expect(verify_orders_recursively(
        take_out: sad_path[:take_out_orders],
        dine_in: sad_path[:dine_in_orders],
        served: sad_path[:served_orders]
        )
      ).to eq(false)
    end
    it 'returns true' do
      expect(verify_orders_recursively(
        take_out: happy_path[:take_out_orders],
        dine_in: happy_path[:dine_in_orders],
        served: happy_path[:served_orders]
        )
      ).to eq(true)
    end
  end

  describe 'iterative path' do
    it 'returns false' do
      expect(verify_order(
        take_out: sad_path[:take_out_orders],
        dine_in: sad_path[:dine_in_orders],
        served: sad_path[:served_orders]
        )
      ).to eq(false)
    end
    it 'returns true' do
      expect(verify_order(
        take_out: happy_path[:take_out_orders],
        dine_in: happy_path[:dine_in_orders],
        served: happy_path[:served_orders]
        )
      ).to eq(true)
    end
  end
end
