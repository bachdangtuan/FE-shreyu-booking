export class SearchCompanyParams {
    type: string;
    orderColumns: string;
    orderDirects: string;
    houseNbr: string;
    status: string[];
    page?: number;
    limit?: number;

    constructor(props: {
        type: any;
        orderColumns: string;
        orderDirects: string;
        houseNbr: string;
        page: number;
        limit: number;
        status: string[];
    }) {
        this.type = props?.type || "";
        this.orderColumns = props.orderColumns || "created";
        this.orderDirects = props.orderDirects || "DESC";
        this.houseNbr = props.houseNbr || "";
        this.page = props?.page || 0;
        this.limit = props?.limit || 40;
        this.status = props?.status || [""];
    }
}
