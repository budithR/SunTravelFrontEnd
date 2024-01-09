import { Hotel } from "../hotel";
import { RoomType } from "../room-type/roomType";

export interface Contract {
    contractID: number | null;
    markupPrice: number;
    startDate: Date;
    endDate: Date;
    hotel: Hotel;
    roomType: RoomType;
}