// Table data
export interface CompanyModel {
    id: string;
    name: string;
    image: string;
    description: string;
    office: string,
    totalCar: number;
    createdAt: any;
    status: any;
    [key: string]: string | number;
}
