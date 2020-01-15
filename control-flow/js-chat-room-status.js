function chatroomStatus(users) {
	return users.length === 0 ? 'no one online' : users.length < 3 ? `${users.join(' and ')} online` : `${users[0]}, ${users[1]} and ${users.length - 2} more online`
}

chatroomStatus([]) // "no one online"
chatroomStatus(["becky325"]) // "becky325 online"
chatroomStatus(["becky325", "malcolm888"]) // "becky325 and malcolm888 online"
chatroomStatus(["becky325", "malcolm888", "fah32fa"]) // "becky325, malcolm888 and 1 more online"
chatroomStatus(["paRIE_to"]) // "paRIE_to online"
chatroomStatus(["s234f", "mailbox2"]) // "s234f and mailbox2 online"
chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]) // "pap_ier44, townieBOY and 4 more online"
