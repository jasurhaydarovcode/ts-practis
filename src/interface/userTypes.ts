interface userGeo {
    "lat": string,
    "lng": string
}

interface userAddress {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": userGeo
}

interface userCompany {
    "name": string,
    "catchPhrase": string,
    "bs": string
}

export interface UserType {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": userAddress,
    "phone": string,
    "website": string | null,
    "company": userCompany
}