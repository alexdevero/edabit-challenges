def get_vote_count(votes):
	return votes.get('upvotes') - votes.get('downvotes')

get_vote_count({'upvotes': 13, 'downvotes': 0}) # 13
get_vote_count({'upvotes': 2, 'downvotes': 33}), #-31
get_vote_count({'upvotes': 132, 'downvotes': 132}) # 0
get_vote_count({'upvotes': 0, 'downvotes': 0}) # 0
get_vote_count({'downvotes': 4, 'upvotes': 1}) # -3