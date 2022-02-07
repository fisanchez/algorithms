=begin
My cake shop is so popular, I'm adding some tables and hiring wait staff so
folks can have a cute sit-down cake-eating experience.

I have two registers: one for take-out orders,
and the other for the other folks eating inside the cafe.
All the customer orders get combined into one list for the kitchen,
where they should be handled first-come, first-served.

Recently, some customers have been complaining that people who
placed orders after them are getting their food first.
Yikes—that's not good for business!

To investigate their claims,
one afternoon I sat behind the registers with my laptop and recorded:

The take-out orders as they were entered into the system
and given to the kitchen. (take_out_orders)

The dine-in orders as they were entered into the system
and given to the kitchen. (dine_in_orders)

Each customer order (from either register)
as it was finished by the kitchen. (served_orders)

Given all three arrays, write a method to check that my service is first-come,
first-served. All food should come out in the same order customers requested it.
=end

module Solution
  def neighbors_nil?(neighbor1, neighbor2, index)
    neighbor1[index + 1].nil? && neighbor2[index + 1].nil?
  end

  def verify_order(take_out:, dine_in:, served:)
    order_index = 0

    served.each do |value|
      if take_out[order_index].nil? && dine_in[order_index].nil? && neighbors_nil?(take_out, dine_in, order_index)
        order_index += 1
      elsif take_out[order_index].eql?(value)
        take_out[order_index] = nil
      elsif dine_in[order_index].eql?(value)
        dine_in[order_index] = nil
      elsif take_out[order_index].nil? && take_out[order_index + 1].eql?(value)
        take_out[order_index + 1] = nil
      elsif dine_in[order_index].nil? && dine_in[order_index + 1].eql?(value)
        dine_in[order_index + 1] = nil
      else
        return false
      end
    end
    true
  end
end
