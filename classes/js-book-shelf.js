class Book {
	// Write your properties and methods here
	constructor(title, author) {
		this.title = title
		this.author = author
	}

	getTitle() {
		return 'Title: ' + this.title
	}

	getAuthor() {
		return 'Author: ' + this.author
	}
}

// Instantiate your Book constructor here
const PP = new Book('Pride and Prejudice', 'Jane Austen')
const H = new Book('Hamlet', 'William Shakespeare')
const WP = new Book('War and Peace', 'Leo Tolstoy')

PP.title // "Pride and Prejudice"
PP.author // "Jane Austen"
PP.getTitle() // 'Title: Pride and Prejudice'
PP.getAuthor() // 'Author: Jane Austen'

H.title // "Hamlet"
H.author // "William Shakespeare"
H.getTitle() // 'Title: Hamlet'
H.getAuthor() // 'Author: William Shakespeare'

WP.title // "War and Peace"
WP.author // "Leo Tolstoy"
WP.getTitle() // 'Title: War and Peace'
WP.getAuthor() // 'Author: Leo Tolstoy'
