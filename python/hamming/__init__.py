# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(dna_seq1, dna_seq2):
    """Function to compute hamming distance."""
    # If both DNAs are not equal, raise exception
    if not len(dna_seq1) == len(dna_seq2):
        raise ValueError
    else:
        # Return the hamming distance between 2 DNAs
        return sum(ch1 != ch2 for ch1, ch2 in zip(dna_seq1, dna_seq2))
