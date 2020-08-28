function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes
}

getVoteCount({ upvotes: 13, downvotes: 0 }) // 13
getVoteCount({ upvotes: 2, downvotes: 33 }) // -31
getVoteCount({ upvotes: 132, downvotes: 132 }) // 0
getVoteCount({ upvotes: 0, downvotes: 0 }) // 0
getVoteCount({ downvotes: 4, upvotes: 1 }) // -3
