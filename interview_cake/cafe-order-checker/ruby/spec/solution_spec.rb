require_relative '../solution.rb'
require 'pry-byebug'

include Solution

describe 'Solution' do
  describe 'happy path' do
    it 'returns false' do
      take_out_orders = [1, 3, 5]
      dine_in_orders = [2, 4, 6]
      served_orders = [1, 2, 4, 6, 5, 3]

      expect(verify_order(
        take_out: take_out_orders,
        dine_in: dine_in_orders,
        served: served_orders
        )
      ).to eq(false)
    end
    it 'returns true' do
      take_out_orders = [17, 8, 24]
      dine_in_orders = [12, 19, 2]
      served_orders = [17, 8, 12, 19, 24, 2]

      expect(verify_order(
        take_out: take_out_orders,
        dine_in: dine_in_orders,
        served: served_orders
        )
      ).to eq(true)
    end
  end
end
