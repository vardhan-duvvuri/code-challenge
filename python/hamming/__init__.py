# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(string1, string2):
    """Function to compute hamming distance."""
    if not len(string1) == len(string2):
        raise ValueError
    else:
        return sum(ch1 != ch2 for ch1, ch2 in zip(string1, string2))
