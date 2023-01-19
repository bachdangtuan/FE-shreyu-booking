// Table data
export interface CompanyModel {
    id: string;
    name: string;
    image: string;
    description: string;
    office: string,
    totalCar: number;
    createdAt: string;
    status: string | number;

    [key: string]: string | number;
}
