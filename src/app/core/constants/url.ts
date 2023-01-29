// export const API_URL = {
//     //AUTHEN
//     CREATE: "http://localhost:5000/api/v1/users/register",
//     LOGIN: "http://localhost:5000/api/v1/users/login",
//     RESET_PASSWORD: 'http://localhost:5000/api/v1/users/reset-password',
//
//     // COMPANY
//     CREATE_COMPANY: "http://localhost:5000/api/v1/companies/create-company",
//     DETAIL_COMPANY: "http://localhost:5000/api/v1/companies",
//     LIST_COMPANY: "http://localhost:5000/api/v1/companies/list-company",
//
//
//     //VEHICLE
//     LIST_VEHICLE: "http://localhost:5000/api/v1/vehicle/list-vehicle",
//     CREATE_VEHICLE: "http://localhost:5000/api/v1/vehicle/create-vehicle",
//
//
//     //STATION
//     LIST_STATION: "http://localhost:5000/api/v1/stations",
//
//
//     // TRIP
//     CREATE_TRIP: "http://localhost:5000/api/v1/trips/create-trip",
//     LIST_TRIP: "http://localhost:5000/api/v1/trips/list-trips",
//     IMPORT_TRIP: "http://localhost:5000/api/v1/trips/import-trip",
// }

export const LINK = 'https://api-dev.bachdangtuan.click'
export const LINK2 = "https://logger.bachdangtuan.click"


export const API_URL = {
    // AUTH
    CREATE: `${LINK}/api/v1/users/register`,
    LOGIN: `${LINK}/api/v1/users/login`,
    RESET_PASSWORD: `${LINK}/api/v1/users/reset-password`,
    // COMPANY
    CREATE_COMPANY: `${LINK}/api/v1/companies/create-company`,
    DETAIL_COMPANY: `${LINK}/api/v1/companies`,
    LIST_COMPANY: `${LINK}/api/v1/companies/list-company`,
    // VEHICLE
    LIST_VEHICLE: `${LINK}/api/v1/vehicle/list-vehicle`,
    CREATE_VEHICLE: `${LINK}/api/v1/vehicle/create-vehicle`,
    // STATION
    LIST_STATION: `${LINK}/api/v1/stations`,
    // TRIP
    CREATE_TRIP: `${LINK}/api/v1/trips/create-trip`,
    LIST_TRIP: `${LINK}/api/v1/trips/list-trips`,
    IMPORT_TRIP: `${LINK}/api/v1/trips/import-trip`,

    // LOG
    // LIST_LOG: `${LINK2}/api/v1/logging`,
    LIST_LOG: `http://localhost:5001/api/v1/logging`,
}

export const PARAM_URL = {
    DETAIL_COMPANY: 'apps/company/detail/'
}
