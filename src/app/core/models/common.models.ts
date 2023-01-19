export interface Column {
    name: string;
    label: string;
    formatter: (a: any) => any | string;
    sort?: boolean;
    width?: number;
}

