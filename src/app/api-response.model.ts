export class ApiResponse {
    constructor(
        public status: boolean,
        public message: string,
        public data: any
    )
    {
        
    }
}
