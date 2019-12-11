
export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
        lat: string
        lng: string
    }
}

export interface Company {
    name: string
    catchPhrase: string
    bs: string
}

export interface UserData {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

export interface UserState {
    users: UserData[]
    loading: boolean
}

export interface UserAction {
    type: string
    payload: any
}

export type UserTypes = UserAction