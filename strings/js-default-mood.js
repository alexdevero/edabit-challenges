function moodToday(mood) {
	return mood === undefined ? 'Today, I am feeling neutral' : `Today, I am feeling ${mood}`
}

moodToday("happy") // "Today, I am feeling happy"
moodToday("sad") // "Today, I am feeling sad"
moodToday("very happy") // "Today, I am feeling very happy"
moodToday("rather empty inside") // "Today, I am feeling rather empty inside"
moodToday("confused") // "Today, I am feeling confused"
moodToday() // "Today, I am feeling neutral"
