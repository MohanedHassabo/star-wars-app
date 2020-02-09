// Generic Interface to hold json data
export interface Adapter<T> {
    adapt(item: any): T;
}

