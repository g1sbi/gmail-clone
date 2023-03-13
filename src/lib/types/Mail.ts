export interface ReceivedMail {
	id: number,
	sender: string,
	subject: string,
	body: string,
	date: Date,
	read: boolean,
	starred: boolean
}

export interface SentMail {
	id: number,
	recipient: Array<string>,
	subject: string,
	body: string,
	date: Date,
}	
