=begin
Your team is scrambling to decipher a recent message,
worried it's a plot to break into a major European National Cake Vault.
The message has been mostly deciphered, but all the words are backward!
Your colleagues have handed off the last step to you.

Write a method reverse_words!() that takes a message as a string
and reverses the order of the words in place. ↴
=end

# Solution for reversing a string and words in place
#
module MySolution
  #
  # Accepts a string and reverses the order in place
  # Example: reverse_words!("cake pound steal")
  # > "steal pound cake"
  #
  # @param [String] string "cake pound steal"
  #
  # @return [String] "steal pound cake"
  #
  def reverse_words!(str)

    # Reverse the entire string
    reverse!(
      str: str,
      left_index: 0,
      right_index: str.length - 1
    )
    #> 'laets dnuop ekac'

    current_word_index = 0
    (0..str.length).each do |index|

      # Skip until we reach end of word or end of string
      next unless index == str.length || str[index].eql?(' ')

      # We reverse the characters of that one word
      reverse!(
        str: str,
        left_index: current_word_index,
        right_index: index - 1
      )

      current_word_index = index + 1
    end

    str
  end


  #
  # Accepts a string and reverses the characters in place
  #
  # @param [String] string "happy"
  #
  # @return [String] "yppah"
  #
  def reverse!(str:, left_index:, right_index:)
    while left_index < right_index
      # Not every language is able to set multiple variables at a time
      # If your language doesn't support this, you will need to store
      # the characters in memory before swapping
      str[left_index], str[right_index] =
        str[right_index], str[left_index]

      left_index += 1
      right_index -= 1
    end
    str
  end
end
