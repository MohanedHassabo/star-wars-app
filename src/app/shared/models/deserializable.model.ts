
//interface to deserialize our JSON to objects. (Interface which provides an API for deserialization)
export interface Deserializable {
    deserialize(input: any): this;
}