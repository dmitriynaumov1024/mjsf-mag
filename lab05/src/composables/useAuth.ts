import { reactive } from "vue"
import type { User } from "@/types/index.ts"

interface AuthState {
    user?: User
}

interface AuthComposable {
    auth: AuthState
    login (email: String, password: String): boolean
    logout (): boolean
}

let authState = reactive<AuthState>({
    user: null
})

export function useAuth(): AuthComposable {
    return { 
        auth: authState,
        login (email: String, password: String): boolean {
            if (authState.user) {
                return false
            }
            authState.user = { id: 1, email }
            return true
        }, 
        logout (): boolean {
            if (authState.user) {
                authState.user = null
                return true
            }
            return false
        }
    }
}
