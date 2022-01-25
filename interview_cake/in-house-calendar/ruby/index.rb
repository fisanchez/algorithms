require 'pry-byebug'

# @params Array of Calendars
def merge_ranges(meetings)
  # sort by start time
  sorted_calendars = meetings.sort
  merged_calendars = []

  while sorted_calendars.size > 1
    first = sorted_calendars.first
    second = sorted_calendars[1]

    merge_response = merge_meetings(first_meeting:first, second_meeting: second)
    if merge_response.first.eql? :merged
      merged_calendars << merge_response.last
      sorted_calendars.shift(2)
    else
      sorted_calendars << first
      sorted_calendars.shift(1)
    end
  end

  merged_calendars << sorted_calendars.first if sorted_calendars.count.eql? 1
  merged_calendars.sort
end

def merge_meetings(first_meeting:, second_meeting:)
  # Merge if end time of first is greater or equal to start time of second
  if first_meeting[1] >= second_meeting[0]
    return [:merged, [first_meeting[0], second_meeting[1]]]
  end
  [:not_merged, first_meeting]
end
