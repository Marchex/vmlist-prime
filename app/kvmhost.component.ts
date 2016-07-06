import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer,TreeTable} from 'primeng/primeng';
import {KvmHost} from './kvmhosts/kvmhost';
import {KvmHostService} from './kvmhosts/kvmhostservice';


@Component({
	templateUrl: 'app/kvmhost.component.html',
	selector: 'my-app',
    directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer,TreeTable],
	providers: [HTTP_PROVIDERS,KvmHostService]
})
export class KvmHostComponent {

	displayDialog: boolean;
    kvmhost: KvmHost = new PrimeKvmHost();
    selectedKvmHost: KvmHost;
    newKvmHost: boolean;
    kvmhosts: KvmHost[];
    cols:  any[];

    constructor(private kvmhostService: KvmHostService) {}

    ngOnInit() {
        this.kvmhostService.getKvmHosts().then(s => this.kvmhosts = s);

        this.cols = [
            {field: 'name', header: 'Name'},
            {field: 'os', header: 'OS'},
            {field: 'use', header: 'Infra code'},
            {field: 'guest_cpu_total', header: 'Used CPUs'},
            {field: 'cpu_total', header: 'Total CPUs'},
            {field: 'cpu_percentage', header: 'CPU allocation'},
            {field: 'guest_maxmem_total', header: 'Used Mem'},
            {field: 'memory', header: 'Total Mem'},
            {field: 'mem_percentage', header: 'Mem allocation'}
        ];
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
