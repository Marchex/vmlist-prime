import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
import {KvmHost} from './kvmhosts/kvmhost';
import {KvmHostService} from './kvmhosts/kvmhostservice';


@Component({
	templateUrl: 'app/kvmhost.component.html',
	selector: 'kvm-hosts',
    directives: [InputText,DataTable,Button,Dialog,Column,Header,Footer],
	providers: [HTTP_PROVIDERS,KvmHostService]
})
export class KvmHostComponent {

    kvmhosts: KvmHost[];
    cols:  any[];

    constructor(private kvmhostService: KvmHostService) {}

    ngOnInit() {
        this.kvmhostService.getKvmHosts().then(s => this.kvmhosts = s);

        this.cols = [
            {field: 'chef_server', header: 'Chef Server'},
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
}

