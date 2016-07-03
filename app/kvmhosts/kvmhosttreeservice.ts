import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {KvmHost} from './kvmhost';

@Injectable()
export class KvmHostService {

    constructor(private http: Http) {}

    getKvmHosts() {
        return this.http.get('app/resources/data/hosts_and_guests.json')
                    .toPromise()
                    .then(res => <KvmHost[]> res.json().data)
                    .then(data => { return data; });
    }
}
