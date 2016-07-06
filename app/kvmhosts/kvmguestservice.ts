import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {KvmGuest} from './kvmguest';

@Injectable()
export class KvmGuestService {

    constructor(private http: Http) {}

    getKvmGuests() {
        return this.http.get('app/resources/data/guests.json')
                    .toPromise()
                    .then(res => <KvmGuest[]> res.json().data)
                    .then(data => { return data; });
    }
}
