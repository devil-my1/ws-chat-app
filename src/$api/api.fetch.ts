interface IFetchProps {
	path: string
	method?: string
	body?: Record<string, any> | undefined
	headers?: Record<string, string>
	isAuth?: boolean
}

class FetchClient {
	private API_URL = process.env.API_URL as string

	constructor(private defaultHeaders: Record<string, string> = {}) {}

	async get<T>({ path, headers, isAuth = false }: IFetchProps): Promise<T> {
		return this.fetch({ path, method: "GET", headers, isAuth })
	}

	async post<T>({
		path,
		body,
		headers,
		isAuth = false
	}: IFetchProps): Promise<T> {
		return this.fetch<T>({ path, method: "POST", body, headers, isAuth })
	}

	async put<T>({
		path,
		body,
		headers,
		isAuth = false
	}: IFetchProps): Promise<T> {
		return this.fetch<T>({ path, method: "PUT", body, headers, isAuth })
	}

	async delete<T>({ path, headers, isAuth = false }: IFetchProps): Promise<T> {
		return this.fetch<T>({ path, method: "DELETE", headers, isAuth })
	}

	private async fetch<T>({
		path,
		method,
		body,
		headers,
		isAuth
	}: IFetchProps): Promise<T> {
		const url = `${this.API_URL}/${path}`

		const authorizationHeader: HeadersInit = isAuth
			? { Authorization: `Bearer ${localStorage.getItem("token")}` }
			: {}

		try {
			const response = await fetch(url, {
				method,
				headers: {
					"Content-Type": "application/json",
					...this.defaultHeaders,
					...authorizationHeader,
					...headers
				},
				body: body ? JSON.stringify(body) : null
			})

			const data = await response.json()

			if (!response.ok) {
				console.error("Fetch error: ", data)
				throw new Error("Fetch error: " + JSON.stringify(data))
			}

			return data
		} catch (error) {
			console.error("Fetch error: ", error)
			throw error
		}
	}
}

export const $fetch = new FetchClient()
