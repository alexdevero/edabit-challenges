function inkLevels(inks) {
	return Math.min(...Object.values(inks))
}

inkLevels({
	"cyan": 23,
	"magenta": 12,
	"yellow": 10
}) // 10

inkLevels({
	"cyan": 432,
	"magenta": 543,
	"yellow": 777
}) // 432

inkLevels({
	"cyan": 700,
	"magenta": 700,
	"yellow": 0
}) // 0

inkLevels({
	"cyan": 70,
	"magenta": 700,
	"yellow": 1
}) // 1

inkLevels({
	"cyan": 6543,
	"magenta": 74543,
	"yellow": 2345678
}) // 6543

inkLevels({
	"cyan": 1,
	"magenta": 1,
	"yellow": 1
}) // 1

inkLevels({
	"cyan": 700,
	"magenta": 700,
	"yellow": 700
}) // 700
