export interface UserResponse {
    code: number,
    userobj: {
      cellulare: number,
      created_at: string,
      email: string,
      email_verified_at: string,
      id: number,
      name: string,
      updated_at: string
    }
  }