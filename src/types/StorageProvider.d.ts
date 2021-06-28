import Room from "./Room";
import Message from "./Message";

export default interface StorageProvider {
    connect():Promise<void>

    updateRoom(roomId: number, room: object): Promise<any>

    addMessage(roomId: number, message: object): Promise<any>

    addRoom(room: object): Promise<any>

    removeRoom(roomId: number): Promise<any>

    updateMessage(roomId: number, messageId: string, message: object): Promise<any>

    fetchMessages(roomId: number, skip: number, limit: number): Promise<Message[]>

    getMessage(roomId: number, messageId: string): Promise<Message>

    addMessages(roomId: number, messages: Message[]):Promise<any>

    getAllRooms(): Promise<Room[]>

    getRoom(roomId: number): Promise<Room>
}
