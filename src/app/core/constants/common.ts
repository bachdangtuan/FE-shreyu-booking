import {CompanyModel} from "../models/company.model";
import {Select2Data} from "ng-select2-component";

const NAME = 'Shreyu - Dịch vụ quản lý đặt vé truyến đi trực tuyến'

// title page
export const TITLE = {
    REGISTER: `Đăng ký | ${NAME}`,
    LOGIN: `Đăng nhập | ${NAME}`,
}

// column table vehicle

export const COLUMN_VEHICLE = [
    {
        name: 'id',
        label: 'ID',
        width: 50,
    },
    {
        name: 'images',
        label: 'Hình ảnh',
        width: 150,
    },
    {
        name: 'name',
        label: 'Tên xe',
        width: 100,
    },
    {
        name: 'type',
        label: 'Loại xe',
        width: 80
    },
    {
        name: 'description',
        label: 'Giới thiệu',
    },
    {
        name: 'numberRegister',
        label: 'Biển kiểm soát',
        width: 120
    },
    {
        name: 'updatedAt',
        label: 'Ngày tạo',
    },
    {
        name: 'salary',
        label: 'Trạng thái',
    },
];


// column table trip

export const COLUMN_TRIP = [
    {
        name: 'id',
        label: 'ID',
        width: 50,
    },
    {
        name: 'from',
        label: 'Điểm đón khách',
        width: 300,
    },
    {
        name: 'to',
        label: 'Điểm đến',
        width: 300,
    },
    {
        name: 'time',
        label: 'Thời gian khởi hành',
        width: 150,
    },
    {
        name: 'price',
        label: 'Giá tiền',
        width: 100,
    },
    {
        name: 'quantity',
        label: 'Số lượng khách',
        width: 100,
    },
    {
        name: 'totalPrice',
        label: 'Tổng số tiền',
        width: 100,
    },
    {
        name: 'status',
        label: 'Trạng thái',
        width: 150,
    },
];

// column table company
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
        width: 200,
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

// status
export const STATUS_CONTENT = {
    DANG_TIEN_HANH: 'Đang tiến hành',
    CHUA_SAN_SANG: 'Chưa sẵn sàng',
    SAN_SANG: 'Đã sẵn sàng',
    DA_HOAN_THANH: 'Đã hoàn thành',
    TAT_CA: 'Tất cả',
}

export const STATUS_VALUE = {
    DANG_TIEN_HANH: '4',
    CHUA_SAN_SANG: '2',
    SAN_SANG: '1',
    DA_HOAN_THANH: '3',
    TAT_CA: '10',
}
export const STATUS: Select2Data = [
    {
        label: '',
        options: [
            {value: STATUS_VALUE.SAN_SANG, label: STATUS_CONTENT.SAN_SANG},
            {value: STATUS_VALUE.CHUA_SAN_SANG, label: STATUS_CONTENT.CHUA_SAN_SANG},
            {value: STATUS_VALUE.DANG_TIEN_HANH, label: STATUS_CONTENT.DANG_TIEN_HANH},
            {value: STATUS_VALUE.DA_HOAN_THANH, label: STATUS_CONTENT.DA_HOAN_THANH},
            {value: STATUS_VALUE.TAT_CA, label: STATUS_CONTENT.TAT_CA}
        ]
    }
]
