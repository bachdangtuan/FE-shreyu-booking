export const API_URL = {
    //AUTHEN
    CREATE: "http://localhost:5000/api/v1/users/register",
    LOGIN: "http://localhost:5000/api/v1/users/login",


    // COMPANY
    CREATE_COMPANY: "http://localhost:5000/api/v1/companies/create-company",
    DETAIL_COMPANY: "http://localhost:5000/api/v1/companies",
    LIST_COMPANY: "http://localhost:5000/api/v1/companies/list-company",


    //VEHICLE
    LIST_VEHICLE: "http://localhost:5000/api/v1/vehicle/list-vehicle",




    // TRIP
    // CREATE_TRIP: "http://localhost:5000/api/v1/companies/create-company",
    LIST_TRIP: "http://localhost:5000/api/v1/trips/list-trips",
}


export const PARAM_URL = {
    DETAIL_COMPANY: 'apps/company/detail/'
}
