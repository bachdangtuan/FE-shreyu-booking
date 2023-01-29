export class SearchLogParams {
    status: any;
    page?: number;
    limit?: number;

    constructor(props: {
        status: any;
        page?: number;
        limit?: number;
    }) {
        this.page = props?.page;
        this.limit = props?.limit;
        this.status = props?.status;
    }
}
