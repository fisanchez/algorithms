# Binary Search

## Metaphor

Suppose you're trying to look someone up in a phone book. You know their name
starts with a K, what do you do? You could start at the beginning and keep
flipping pages until you hit the Ks. But what you're most likely to start at the
middle of the book, because you know the K's are going to be near the middle
of the book.

That is what a binary search does.

## Description

A binary search is an algorithm; its inputs are a sorted list of elements.
(Sorted elements are required) It returns the position of the element is
located, otherwise, returns `null`

## Psudocode

```
1. Determine the low and the high values
2. Iterate
3. Determine middle index
4. If the guess === target, return value
5. If guess > target, high = guess - 1
6. if guess < target, low = guess + 1
7. else return nil
```
