import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter.interface';
import { Deserializable} from '../interfaces/deserializable.interface';

// Defined Result interface for fields mapping
export class Result implements Deserializable {
    id: number;
    name: string;
    noOfCharacters: number;
    // noOfFilm: number;
    noOfPilots: number;
    pilots: string;
    total: number;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
    getName() {
        return this.name + ' (' + this.noOfCharacters + ')';
    }
}

// JsonResult interface to map fields
export class JsonResult implements Deserializable {
    success: boolean;
    question: string;
    answer: Result[];
    total: number;
    deserialize(input: any): this {
        Object.assign(this, input);
        this.answer = input.answer.map(
            // (answer) => new Answer().deserialize(answer)
            (answer) => new Result().deserialize(
            {
                id: answer.id,
                name: answer.name,
                noOfCharacters: (answer.no_of_characters) ? answer.no_of_characters : 0,
                noOfPilots: (answer.no_of_pilots) ? answer.no_of_pilots : 0,
                // noOfFilm: (answer.no_of_film)? answer.no_of_film: 0,
                pilots: answer.pilots,
                total: answer.total
            })
        );
        return this;
    }
}


@Injectable({
    providedIn: 'root'
})

export class DataAdapter implements Adapter<JsonResult> {
    adapt(item: any): JsonResult {
        return new JsonResult().deserialize(item);
    }
}
