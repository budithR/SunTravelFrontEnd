import { Hotel } from "../hotel";

export interface RoomType {
    roomTypeID: number | null;
    roomTypeName: string;
    maxAdults: number;
    noOfRooms: number;
    pricePerPerson: number;
    hotel: Hotel;

    
}