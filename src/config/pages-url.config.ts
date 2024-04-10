class DASHBOARD {
	private root = "/i"

	HOME = this.root
	FRIENDS = `${this.root}/friends`
	CALL = `${this.root}/call`
	CHAT = `${this.root}/chat`
	SETTINGS = `${this.root}/settings`
	AUTH = "/auth"
}
export const DASHBOARD_URL = new DASHBOARD()
