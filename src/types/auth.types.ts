export interface IAuthFormState {
	email: string
	password: string
}

export interface IUser {
	id: number
	username: string
	email: string
	confirmed: boolean
	blocked: boolean
	role: string
	avatar: string
	createdAt: string
	updatedAt: string
}
