# Selection Sort

## Metaphor

Suppose you're trying to sort a list of artists by the number of times you have played
their music. You will go through all the songs, pick the smallest number, and
add to the new list.

This is what the selection sort does.

## Description

An algorithm that sorts by scanning a list for the smallest value,
then appending it to an other list. It's a pretty slow algorithm because for
every item, it has to scan all the remaining items. Resulting in run-time of
O(n^2)

## Psudocode

```
1. Determine the starting value
2. Determine the starting value's index
3. Scan for every item in the list
4. Find the smallest value
5. Add smallest value to a new array
6. Return array
```
