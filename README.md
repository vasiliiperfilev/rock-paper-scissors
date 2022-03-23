# rock-paper-scissors

from math import *

def num_sevens(x):
    """Returns the number of times 7 appears as a digit of x.

    >>> num_sevens(3)
    0
    >>> num_sevens(7)
    1
    >>> num_sevens(7777777)
    7
    >>> num_sevens(2637)
    1
    >>> num_sevens(76370)
    2
    >>> num_sevens(12345)
    0
    """
    if x // 10 == 0:
        if x == 7:
            return 1
        else:
            return 0
    else:
        if x % 10 == 7:
            return num_sevens(x // 10) + 1
        else:
            return num_sevens(x // 10)

def pingpong(n):
    """Return the nth element of the ping-pong sequence.

    >>> pingpong(7)
    7
    >>> pingpong(8)
    6
    >>> pingpong(15)
    1
    >>> pingpong(21)
    -1
    >>> pingpong(22)
    0
    >>> pingpong(30)
    6
    >>> pingpong(68)
    2
    >>> pingpong(69)
    1
    >>> pingpong(70)
    0
    >>> pingpong(71)
    1
    >>> pingpong(72)
    0
    >>> pingpong(100)
    2
    >>> from construct_check import check
    >>> # ban assignment statements
    >>> check(HW_SOURCE_FILE, 'pingpong', ['Assign', 'AugAssign'])
    True
    """
    def pingpong_substract(step, result):
        if step == n:
            return result
        elif step % 7 == 0 or num_sevens(step) > 0:
            return pingpong_add(step + 1, result + 1)
        else:
            return pingpong_substract(step + 1, result - 1)

    def pingpong_add(step, result):
        if step == n:
            return result
        elif step % 7 == 0 or num_sevens(step) > 0:
            return pingpong_substract(step + 1, result - 1)
        else:
            return pingpong_add(step + 1, result + 1)
    return pingpong_add(1,1)
            
def count_change(total):
    """Return the number of ways to make change for total.

    >>> count_change(7)
    6
    >>> count_change(10)
    14
    >>> count_change(20)
    60
    >>> count_change(100)
    9828
    >>> from construct_check import check
    >>> # ban iteration
    >>> check(HW_SOURCE_FILE, 'count_change', ['While', 'For'])
    True
    """
    power = floor(log2(total))
    def count_change_helper(total = total, power = power):
        m = 2**power
        if total == 0:
            return 1
        elif total < 0:
            return 0
        elif m < 1:
            return 0
        else:
            return count_change_helper(total-m, power) + count_change_helper(total, power - 1)
    return count_change_helper()
