import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
import {KvmHost} from './kvmhosts/kvmhost';
import {KvmHostService} from './kvmhosts/kvmhostservice';

@Component({
	templateUrl: 'app/kvmhost.component.html',
	selector: 'my-app',
    directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer],
	providers: [HTTP_PROVIDERS,KvmHostService]
})
export class KvmHostComponent {

	displayDialog: boolean;

    kvmhost: KvmHost = new PrimeKvmHost();

    selectedKvmHost: KvmHost;

    newKvmHost: boolean;

    kvmhosts: KvmHost[];
    foo: string;

    constructor(private kvmhostService: KvmHostService)
    {
        this.foo = 'bar';
    }

    ngOnInit() {
        this.kvmhostService.getKvmHosts().then(s => this.kvmhosts = s);
    }

    showDialogToAdd() {
        this.newKvmHost = true;
        this.kvmhost = new PrimeKvmHost();
        this.displayDialog = true;
    }

    save() {
        if(this.newKvmHost)
            this.kvmhosts.push(this.kvmhost);
        else
            this.kvmhosts[this.findSelectedKvmHostIndex()] = this.kvmhost;

        this.kvmhosts = null;
        this.displayDialog = false;
    }

    delete() {
        this.kvmhosts.splice(this.findSelectedKvmHostIndex(), 1);
        this.kvmhost = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newKvmHost = false;
        this.kvmhost = this.cloneKvmHost(event.data);
        this.displayDialog = true;
    }

    cloneKvmHost(k: KvmHost): KvmHost {
        let kvmhost = new PrimeKvmHost();
        for(let prop in k) {
            kvmhost[prop] = k[prop];
        }
        return kvmhost;
    }

    findSelectedKvmHostIndex(): number {
        return this.kvmhosts.indexOf(this.selectedKvmHost);
    }
}

class PrimeKvmHost implements KvmHost {

    constructor(
        public name?,
        public cpu_total?,
        public guest_cpu_total?,
        public memory?,
        public guest_maxmem_total?,
        public platform?,
        public platform_version?,
        public use?,
        public guests?
    ) {}
}
