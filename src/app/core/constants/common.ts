import {CompanyModel} from "../models/company.model";

const NAME = 'Shreyu - Dịch vụ quản lý đặt vé truyến đi trực tuyến'

// title page
export const TITLE = {
    REGISTER: `Đăng ký | ${NAME}`,
    LOGIN: `Đăng nhập | ${NAME}`,
}

// column table
export const COLUMN_COMPANY = [
    {
        name: 'image',
        label: 'ID',
        formatter: (record: CompanyModel) => record.id,
        width: 50,
    },
    {
        name: 'image',
        label: 'Hình ảnh',
        formatter: (record: CompanyModel) => record.image,
        width: 180,
    },
    {
        name: 'company',
        label: 'Tên công ty',
        formatter: (record: CompanyModel) => record.name,
        width: 250,
    },
    {
        name: 'office',
        label: 'Trụ sở chính',
        formatter: (record: CompanyModel) => record.office,
        width: 180
    },
    {
        name: 'age',
        label: 'Giới thiệu',
        formatter: (record: CompanyModel) => record.description,
        width: 360
    },
    {
        name: 'age',
        label: 'Số xe',
        formatter: (record: CompanyModel) => record.totalCar,
    },
    {
        name: 'date',
        label: 'Start Date',
        formatter: (record: CompanyModel) => record.createdAt,
    },
    {
        name: 'salary',
        label: 'Trạng thái',
        formatter: (record: CompanyModel) => record.status,
    },
];
